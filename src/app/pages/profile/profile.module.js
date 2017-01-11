(function () {
  'use strict';

  angular.module('App.pages.profile', [
    'App.pages.profile.profile',
    'App.pages.profile.upload',
    'App.pages.profile.following',
    'App.pages.profile.settings',
    ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile', {
          url: '/profile',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Profile',
          profileSidebarMeta: {
            icon: '',
            order: 0,
          },
        });
  }

})();
