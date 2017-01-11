(function () {
  'use strict';

  angular.module('App.pages.artist')
    .controller('ArtistProfileCtrl', ArtistProfileCtrl);

  /** @ngInject */
  function ArtistProfileCtrl($state, $window, ArtistAlbums, ArtistShows, ArtistVideos, TicketsSearch, MerchList, Search) {

    var vm = this;
    vm.artistName = $state.params.name;
    vm.artistAlbums = [];
    vm.videos = ArtistVideos.getVideos();
    vm.topVideos = ArtistVideos.getTopVideos();
    vm.responsive = ArtistVideos.getSlickResponsive();
    var pageNum = 1;   
    vm.maxSize = 10;
    vm.isCollapsed = false;
    vm.currentPage = 1;  
    vm.hasVideos = true;   

    vm.shows = ArtistVideos.getShows(vm.artistName);
    if(angular.isUndefined(vm.shows)){
      vm.hasVideos = false;
    }

    Search.searchArtists(vm.artistName).then(function(results){
      vm.bannerPic = results[0][0].picture;
    });

    vm.getArtistTickets = function(artistName){
      TicketsSearch.simpleSearchEvents(artistName).then(function(tickets){
        vm.tickets = TicketsSearch.displayTickets;
        vm.hasTickets =  TicketsSearch.hasTickets;
      });     
    }

    vm.getArtistMerch = function(artistName){
      MerchList.getMerch(artistName + " shirt").then(function(merch){
        vm.merch = MerchList.displayMerch;
        vm.hasMerch = MerchList.hasMerch;    
      });     
    }

    vm.getArtistAlbums = function(artistName){
      vm.artistAlbums = [];
      ArtistAlbums.getArtistPicture(artistName).then(function(picAndId){
        vm.artistPicture = picAndId[0].pic;
        vm.artistId = picAndId[0].id;
        ArtistAlbums.getArtistAlbums(vm.artistId).then(function(artistAlbums){
          vm.displayAlbums = ArtistAlbums.displayAlbums;
          vm.hasAlbums = ArtistAlbums.hasAlbums;
          ArtistAlbums.getAlbumTracks(artistAlbums).then(function(albumWithTracks){
            vm.artistAlbums = albumWithTracks;            
          });
        });
      });   
    }

    vm.getArtistPreviousShows = function(artistName){
      ArtistShows.getName(artistName).then(function(name){
        ArtistShows.getArtist(name).then(function(artistMBID){
          if(!angular.isUndefined(artistMBID)){
            vm.artistMBID = artistMBID;
            vm.getArtistShows(vm.artistMBID);
          }
          else{
            vm.hasShows = false;         
          }  
        }); 
      });  
    }

    vm.getArtistShows = function(artistMBID){
      vm.artistShows = [];
      vm.displayShows = [];
      ArtistShows.getArtistShows(artistMBID, pageNum).then(function(shows){
        vm.totalItems = ArtistShows.totalPages;
        vm.itemsPerPage = ArtistShows.itemsPerPage;
        vm.artistShows = shows;
        vm.displayShows = ArtistShows.displayShows;
        vm.hasShows = ArtistShows.hasShows;
      });
    }

    vm.pageChange = function(page){
      pageNum = page;
      vm.getArtistShows(vm.artistMBID);
    }

    vm.openLink = function (url){
      $window.open(url);
    }    

    vm.getArtistTickets(vm.artistName); 
    vm.getArtistMerch(vm.artistName);   
    vm.getArtistAlbums(vm.artistName);
    vm.getArtistPreviousShows(vm.artistName);

  }
})();