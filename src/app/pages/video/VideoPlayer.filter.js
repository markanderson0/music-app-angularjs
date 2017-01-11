(function () {
  'use strict';

  angular.module('App.pages.video')
      .filter('trustedVideo', trustedVideo);

  /** @ngInject */
  function trustedVideo($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }

})();
