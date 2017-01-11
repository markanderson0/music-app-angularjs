(function () {
  'use strict';

  angular.module('App.pages.profile.profile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile.profile', {
          url: '/user',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile/profile.html',
          controller: 'ProfileCtrl',
          controllerAs: 'profile',
          profileSidebarMeta: {
            icon: 'fa fa-user',
            order: 100,
          },
        }).state('profile.profile.user', {
          url: '/:user',
          title: 'Profile',
          templateUrl: 'app/pages/profile/profile/profile.html',
          profileSidebarMeta: {
            icon: 'fa fa-user',
            order: 100,
          },
        });
  }

})();
