(function () {
  'use strict';

  angular.module('App.pages.artist', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('artist', {
          url: '/artist',
          templateUrl: 'app/pages/artist/artist.html',
          controller: 'ArtistProfileCtrl',
          controllerAs: 'artist',
          title: 'Artist',
        }).state('artist.profile', {
          url: '/:name',
          templateUrl: 'app/pages/artist/artistProfile.html',
          title: 'Artist',
        }).state('artist.albums', {
          url: '/:name/albums',
          templateUrl: 'app/pages/artist/albums/artistAlbums.html',
          title: 'Artist',
        }).state('artist.shows', {
          url: '/:name/shows',
          templateUrl: 'app/pages/artist/shows/artistShows.html',
          title: 'Artist',
        }).state('artist.videos', {
          url: '/:name/videos',
          templateUrl: 'app/pages/artist/videos/artistVideos.html',
          title: 'Artist',
        });  
  }
})();

