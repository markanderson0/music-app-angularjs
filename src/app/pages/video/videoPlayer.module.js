(function () {
  'use strict';

  angular.module('App.pages.video', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('video', {
          url: '/artist/:name/video/:show/:playlist/:id',
          templateUrl: 'app/pages/video/videoPlayer.html',
          controller: 'VideoPlayerCtrl',
          controllerAs: 'video',
          title: 'Video',
        });
  }
})();

