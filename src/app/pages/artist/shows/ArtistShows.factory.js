(function () {
  'use strict';

	angular.module('App.pages.artist')
  	.factory('ArtistShows', ArtistShows);

  function ArtistShows($http){
  	
  	var ArtistShows = {};
    var shows = [];
    var song = "";
    var correctName = false;
    var mbid = "";

    function in_array(array, id) {
      for(var i=0;i<array.length;i++) {
          if(array[i].id === id){
            return true;
          } 
      }
      return false;
    }

    ArtistShows.getArtistShows = function(name, pageNum){
      shows = [];
      var venue = "";
      var country = "";
      var city = "";
      var state = "";
      var latitude = "";
      var longitude = "";
      return $http.get('http://api.setlist.fm/rest/0.1/search/setlists.json', {
        params: {
          artistMbid: name,
          p: pageNum
        }
      }).then(function(response){
        ArtistShows.totalPages = parseInt(response.data.setlists['@total']);
        ArtistShows.itemsPerPage = parseInt(response.data.setlists['@itemsPerPage']);
        response.data.setlists.setlist.map(function(setlist){
          var id = setlist['@id'];
          if(!in_array(shows, id)){
            var tour = setlist['@tour'];
            var date =  setlist['@eventDate'];

            if(setlist.hasOwnProperty("venue")){
              venue = setlist.venue['@name'];
              city = setlist.venue.city['@name'];

              if(setlist.venue.city.hasOwnProperty("country")){
                country = setlist.venue.city.country['@name'];
              } 
              if(country === "United States" && setlist.venue.city.hasOwnProperty("@stateCode")){
                state = setlist.venue.city['@stateCode'];
              }
              else{
                state = "";
              }
              if(setlist.venue.city.hasOwnProperty("coords")){
                latitude = setlist.venue.city.coords['@lat'];
                longitude = setlist.venue.city.coords['@long'];
              }
            }
            //var songsSetlist = []
            var songsSetlist = ArtistShows.getSetlist(setlist.sets);

            shows.push({tour: tour, id: id, date: date, venue: venue, 
              country: country, city: city, state: state, latitude: latitude, 
              longitude: longitude, songs: songsSetlist});
          }  
        })
        availableShows(shows);
        return shows;
      }, function(errorCallback){
        shows = [];
        availableShows(shows);
        return shows;
      });     
    }

    ArtistShows.getSetlist = function(setlist){
      var songs = [];
      if(setlist.hasOwnProperty("set")){
        //If setlist has an encore
        if(setlist.set instanceof Array){
          setlist.set.map(function(setSongs){
            if(setSongs.song instanceof Array){
              setSongs.song.map(function(setSong){
                if(!setSong.hasOwnProperty("@tape")){
                  if(setSong.hasOwnProperty("cover")){
                    song = setSong['@name'] + " (" + setSong.cover['@name'] + " cover)"
                  }
                  else{
                    song = setSong['@name'];
                  }      
                  songs.push(song);
                }
              });
            }
            else{
              songs.push(setSongs.song['@name']);
            } 
          });
        }
        //If setlist doesnt have an encore
        else if(setlist.set.song instanceof Array){
          setlist.set.song.map(function(setSong){
            if(!setSong.hasOwnProperty("@tape")){
              if(setSong.hasOwnProperty("cover")){
                song = setSong['@name'] + " (" + setSong.cover['@name'] + " cover)"
              }
              else{
                song = setSong['@name'];
              }    
              songs.push(song);
            }   
          });
        }
        //If a single song set
        else{
          if(!setlist.set.song.hasOwnProperty("@tape")){
            if(setlist.set.song.hasOwnProperty("cover")){
              song = setlist.set.song['@name'] + " (" + setlist.set.song.cover['@name'] + " cover)"
            }
            else{
              song = setlist.set.song['@name'];
            }    
            songs.push(song);
          }  
        }
      }
      return songs;
    }

    ArtistShows.getName = function(name) {
      return $http.get('https://api.spotify.com/v1/search', {
        params: {
          q: name,
          type: "artist",
          limit: 1
        }
      }).then(function(response){
        return response.data.artists.items[0].name;
      }, function(errorCallback){
        return;
      })      
    }
    
    ArtistShows.getArtist = function(name){
      return $http.get('http://api.setlist.fm/rest/0.1/search/setlists.json', {
        params: {
          artistName: name,
          p: 1
        }
      }).then(function(response){
        if(response.data.setlists.setlist instanceof Array){  
          return getMBID(response.data.setlists.setlist, name);
        }
        else{
          if(response.data.setlists.setlist.artist['@name'].toLowerCase() === name.toLowerCase() || 
            response.data.setlists.setlist.artist['@sortName'].toLowerCase() === name.toLowerCase()){
            return response.data.setlists.setlist.artist['@mbid'];
          }
        }  
      }, function(errorCallback){
        return;
      })
    }

    var getMBID = function(setlists, name){
      for(var i = 0; i < setlists.length; i++){
        if(setlists[i].artist['@name'].toLowerCase() === name.toLowerCase() ||
         setlists[i].artist['@sortName'].toLowerCase() === name.toLowerCase()){
          return setlists[i].artist['@mbid'];
          break;
        }
      }
    }

    var availableShows = function(shows){
      ArtistShows.displayShows = [];
      if(!angular.isUndefined(shows)){
        if(shows.length !== 0){
          ArtistShows.hasShows = true;
          if(shows.length > 4){
            ArtistShows.displayShows = shows.slice(0, 4);
          }
          else{
            ArtistShows.displayShows = shows;
          }
        }
        else{
          ArtistShows.hasShows = false;           
        }
      }  
      else{
        ArtistShows.hasShows = false;        
      }      
    }

  	return ArtistShows;
  }	

})();    	