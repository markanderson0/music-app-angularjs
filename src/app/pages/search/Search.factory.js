(function () {
  'use strict';

	angular.module('App.pages.search')
  	.factory('Search', Search);

  function Search($http){
  	
  	var Search = {};

    Search.searchArtists = function(name) {
      var artists = [];
      var image = "";
      return $http.get('https://api.spotify.com/v1/search', {
        params: {
          q: name,
          type: "artist",
          limit: 20
        }
      }).then(function(response){
        return response.data.artists.items.map(function(artist){
          if(artist.hasOwnProperty('images')){
            if(artist.images.length > 1){
              image = artist.images[1].url;
            }
            else if(artist.images.length === 1){
              image =  artist.images[0].url;
            }
            else{
              image = 'assets/img/transblue-bg.jpg';
            }
          }
          else{
            image = 'assets/img/transblue-bg.jpg';
          } 

          artists.push({name: artist.name, picture: image})
          return artists;
        });
      }, function(errorCallback){
        return artists;
      })      
    }

  	return Search;
  }	

})();    	