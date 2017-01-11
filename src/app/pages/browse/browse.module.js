(function () {
  'use strict';

  angular.module('App.pages.browse', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('browse', {
          url: '/browse',
          templateUrl: 'app/pages/browse/browse.html',
          controller: 'BrowseCtrl',
          controllerAs: 'browse',
          title: 'Browse',
          sidebarMeta: {
            icon: 'fa fa-bars',
            order: 0,
          },
        });
    $stateProvider    
        .state('browseGenre', {
          url: '/browse/genre/:genre',
          templateUrl: 'app/pages/browse/browseGenre.html',
          controller: 'BrowseCtrl',
          controllerAs: 'browse',
          title: 'Browse'
        });
  }


})();

