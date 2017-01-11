(function () {
  'use strict';

  angular.module('App.pages.video')
    .factory('VideoPlayer', VideoPlayer);

  /** @ngInject */
  function VideoPlayer($http, $window, ArtistShows) {

    var vm = this;

    VideoPlayer.getSetlist = function(artist, eventDate, eventVenue, eventCity){
      return $http.get('http://api.setlist.fm/rest/0.1/search/setlists.json', {
        params: {
          artistName: artist,
          date: eventDate,
          venueName: eventVenue,
          cityName: eventCity
        }
      }).then(function(response){
        var songsSetlist = ArtistShows.getSetlist(response.data.setlists.setlist.sets);
        return songsSetlist;
      }, function(errorCallback){
        return;
      })
    }

    return VideoPlayer;
  }

})();