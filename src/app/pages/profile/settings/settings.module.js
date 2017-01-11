(function () {
  'use strict';

  angular.module('App.pages.profile.settings', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile.settings', {
          url: '/settings',
          templateUrl: 'app/pages/profile/settings/settings.html',
          controller: 'SettingsCtrl',
          controllerAs: 'settings',
          profileSidebarMeta: {
            icon: 'ion-gear-a',
            order: 400,
          },
          title: 'Settings',
        });
  }

})();
