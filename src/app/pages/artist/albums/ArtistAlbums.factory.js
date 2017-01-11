(function () {
  'use strict';

	angular.module('App.pages.artist')
  	.factory('ArtistAlbums', ArtistAlbums);

  function ArtistAlbums($http){
  	
  	var ArtistAlbums = {};
    var oldArtistId = "";
    var artistPicture = "";
    var artistId = "";
    var picAndId = [];
    var artistAlbums = [];
    var offset = 0;
    var limit = 20;

    ArtistAlbums.getArtistPicture = function(val){
      picAndId = [];
      return $http.get('https://api.spotify.com/v1/search', {
        params: {
          q: val,
          type: "artist",
          limit: 1
        }
      }).then(function(response){
        if(response.data.artists.items[0].images.length > 1){
          artistPicture = response.data.artists.items[0].images[1].url;
        }
        else if(response.data.artists.items[0].images.length === 1){
          artistPicture = response.data.artists.items[0].images[0].url;
        }
        else{
          artistPicture = 'assets/img/transblue-bg.jpg';
        }
        artistId = response.data.artists.items[0].id;
        picAndId.push({pic: artistPicture, id: artistId});
        return picAndId;
      });     
    }

    ArtistAlbums.getArtistAlbums = function(newArtistId){
      if(newArtistId !== oldArtistId){
        oldArtistId = newArtistId;
        var albumCover = "";
        var albumName = "";
        var albumId = "";
        artistAlbums = [];
        offset = 0;
      }
      return $http.get('https://api.spotify.com/v1/artists/'+newArtistId+'/albums', {
        params: {
          album_type: "album"
        }
      }).then(function(response){
        response.data.items.map(function(album){
          albumName = album.name;
          albumId = album.id;
          albumCover = getAlbumCover(album);

          if(!in_array(artistAlbums, albumName)){
            artistAlbums.push({id: albumId, name: albumName, year: "", pic: albumCover, songs: []});
          }
        })
        getDisplayAlbums(artistAlbums);
        return artistAlbums;
      });     
    }

    function in_array(array, name) {
      for(var i=0;i<array.length;i++) {
          if(array[i].name === name){
            return true;
          } 
      }
      return false;
    }

    ArtistAlbums.getAlbumTracks = function(albums){
      var albumSongs = [];
      var albumWithSongs = [];
      var releaseYear = "";
      var albumCover = "";
      var albumIds = getAlbumIds(albums);

      return $http.get('https://api.spotify.com/v1/albums/', {
        params: {
          ids: albumIds
        }
      }).then(function(response){
        response.data.albums.map(function(album){
          albumSongs = [];
          albumCover = getAlbumCover(album);
          album.tracks.items.map(function(track){
            albumSongs.push({trackNum: track.track_number, name: track.name});
          });
          releaseYear = album.release_date.slice(0, 4);
          albumWithSongs.push({name: album.name, cover: albumCover, year: releaseYear, songs: albumSongs});
        }); 

        return albumWithSongs;
      });
    }

    var getAlbumCover = function(album){
      if(album.images.length > 1){
        return album.images[1].url;
      }
      else if(album.images.length === 1){
        return album.images[0].url;
      }
      else{
        return 'assets/img/transblue-bg.jpg';
      }      
    }

    var getAlbumIds = function(albums){
      var albumIds = "";
      if(albums.length !== 0){
        if(albums.length <= 20){
          for(var i = 0; i < albums.length; i++){
            albumIds += albums[i].id + ",";
          }
          albumIds = albumIds.slice(0, -1);
        }
        return albumIds;
      }
      else{
        return albumIds;
      }
    }

    var addAlbumTracks = function(albums, albumWithSongs){
      for(var j = 0; j < albums.length; j++){
        albums[j].songs = albumWithSongs[j].songs;
        albums[j].year = albumWithSongs[j].year;
      } 
      return albums;     
    }

    var getDisplayAlbums = function(artistAlbums){
      if(!angular.isUndefined(artistAlbums)){
        if(artistAlbums.length !== 0){
          if(artistAlbums.length > 3){
            ArtistAlbums.displayAlbums = artistAlbums.slice(0, 3);
          }
          else{
            ArtistAlbums.displayAlbums = artistAlbums;
          }
          ArtistAlbums.hasAlbums = true;
        }
        else{
          ArtistAlbums.hasAlbums = false;
        } 
      }       
      else{
        ArtistAlbums.hasAlbums = false;
      } 
    }

  	return ArtistAlbums;
  }	

})();    	