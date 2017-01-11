(function () {
  'use strict';

  angular.module('App.pages.profile.upload', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile.upload', {
          url: '/upload',
          title: 'Upload',
          templateUrl: 'app/pages/profile/upload/upload.html',
          controller: 'UploadCtrl',
          controllerAs: 'upload',
          profileSidebarMeta: {
            icon: 'fa fa-upload',
            order: 200,
          },
        }).state('profile.upload.uploads', {
          url: '/uploads',
          title: 'Upload',
          templateUrl: 'app/pages/profile/upload/upload.html',
          profileSidebarMeta: {
            icon: 'fa fa-upload',
            order: 200,
          },
        });
  }

})();
