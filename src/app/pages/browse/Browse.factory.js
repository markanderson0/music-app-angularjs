(function () {
  'use strict';

	angular.module('App.pages.browse')
  	.factory('Browse', Browse);

  function Browse($http, BrowseGenres){
  	
  	var Browse = {};

    var pageNum = 0;
    var videosUrl = "assets/playlists"
    var oldGenre = "";
    var artists = [];

    Browse.getGenreArtists = function(genre) {
      if(genre !== oldGenre) {
        artists = [];
        oldGenre = genre;
        pageNum = 0;
      }
      if(pageNum < 5){
        $http.get(videosUrl + '/' + genre + '/' + genre + pageNum + '.json').then(function(response) {
          response.data.data.map(function(artist){
            artists.push({name: artist.name, pic: artist.pic});
          })
        });
        Browse.loadMoreArtists = true;
        if(pageNum == 4) {
          Browse.loadMoreArtists = false;
        }
        pageNum++;
        return artists;
      }
    }

  	return Browse;
  }	

})();    	
