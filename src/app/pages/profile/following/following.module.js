(function () {
  'use strict';

  angular.module('App.pages.profile.following', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('profile.following', {
          url: '/following',
          templateUrl: 'app/pages/profile/following/following.html',
          controller: 'FollowingCtrl',
          controllerAs: 'following',
          title: 'Following',
          profileSidebarMeta: {
            icon: 'fa fa-heart',
            order: 100,
          },
        });
  }

})();
