(function () {
  'use strict';

  angular.module('App.pages.search', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('search', {
          url: '/search?query',
          templateUrl: 'app/pages/search/search.html',
          controller: 'SearchCtrl',
          controllerAs: 'search',
          title: 'Search',
        });  
  }
})();

