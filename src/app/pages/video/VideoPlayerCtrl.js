(function () {
  'use strict';

  angular.module('App.pages.video')
    .controller('VideoPlayerCtrl', VideoPlayerCtrl);

  /** @ngInject */
  function VideoPlayerCtrl($state, $window, ArtistAlbums, ArtistShows, ArtistVideos, TicketsSearch, MerchList, VideoPlayer, Search) {

    var vm = this;

    vm.artistName = $state.params.name;
    vm.showId = $state.params.show;
    vm.playlistId = $state.params.playlist;
    vm.videoId = $state.params.id;

    vm.ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    vm.detailsReoprtOptions = ["Something Wrong", "Another Problem"];

    var showDetails = ArtistVideos.getShowDetails($state.params.show, vm.artistName);
    var videoDetails = ArtistVideos.getVideoDetails($state.params.show, $state.params.playlist, $state.params.id, vm.artistName);
    vm.playlistDetails = ArtistVideos.getPlaylistDetails($state.params.show, $state.params.playlist, vm.artistName);
    vm.date = showDetails[0].date;
    vm.venue = showDetails[0].venue;
    vm.location = showDetails[0].location;
    vm.showVideos = showDetails[0].videos;

    vm.audio = videoDetails[0].audio;
    vm.video = videoDetails[0].video;
    vm.views = videoDetails[0].views;
    vm.time = videoDetails[0].time;
    vm.songsString = videoDetails[0].songsString;
    vm.file = videoDetails[0].file;

    vm.following = false;
    vm.favourited = false;

    vm.audioRated = false;
    vm.videoRated = false;

    var pageNum = 1;
    var artistMBID = "";
    vm.maxSize = 10;
    vm.currentPage = 1;

    vm.responsive = ArtistVideos.getSlickResponsive();

    VideoPlayer.getSetlist(vm.artistName, vm.date, vm.venue, vm.city).then(function(setlist){
      vm.setlist = setlist;
    });

    Search.searchArtists(vm.artistName).then(function(results){
      vm.bannerPic = results[0][0].picture;
    });

    vm.getArtistTickets = function(artistName){
      TicketsSearch.simpleSearchEvents(artistName).then(function(tickets){
        vm.tickets = tickets;
        vm.hasTickets =  TicketsSearch.hasTickets;
      });     
    }  

    vm.getArtistMerch = function(artistName){
      MerchList.getMerch(artistName + " shirt").then(function(merch){
        if(merch.length > 12){
          vm.merch = merch.slice(0, 12);
        }
        else{
          vm.merch = merch;
        }
        vm.hasMerch = MerchList.hasMerch;    
      });     
    } 

    vm.getArtistAlbums = function(artistName){
      ArtistAlbums.getArtistPicture(artistName).then(function(picAndId){
        vm.artistId = picAndId[0].id;
        ArtistAlbums.getArtistAlbums(vm.artistId).then(function(artistAlbums){
          vm.artistAlbums = artistAlbums;
          vm.hasAlbums = ArtistAlbums.hasAlbums;
        });
      });   
    }

    vm.getArtistPreviousShows = function(artistName){
      ArtistShows.getName(artistName).then(function(name){
        ArtistShows.getArtist(name).then(function(MBID){
          if(!angular.isUndefined(MBID)){
            artistMBID = MBID;
            vm.getArtistShows(artistMBID);
          }
          else{
            vm.hasShows = false;         
          }  
        }); 
      });  
    }

    vm.getArtistShows = function(MBID){
      vm.artistShows = [];
      vm.displayShows = [];
      ArtistShows.getArtistShows(MBID, pageNum).then(function(shows){
        vm.totalItems = ArtistShows.totalPages;
        vm.itemsPerPage = ArtistShows.itemsPerPage;
        vm.artistShows = shows;
        vm.displayShows = ArtistShows.displayShows;
        vm.hasShows = ArtistShows.hasShows;
      });
    }

    vm.pageChange = function(page){
      pageNum = page;
      vm.getArtistShows(artistMBID);
    }

    vm.toggleFollow = function(){
        vm.following = !vm.following;
    }

    vm.toggleFavourite = function(){
        vm.favourited = !vm.favourited;
    }

    vm.rateAudio = function(rating){
      vm.audioRating = rating;
      vm.audioRated = true;
    }

    vm.rateVideo = function(rating){
      vm.videoRating = rating;
      vm.videoRated = true;
    }
    
    vm.openLink = function (url){
  		$window.open(url);
		}

  }

})();