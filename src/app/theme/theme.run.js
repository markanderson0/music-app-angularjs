(function () {
  'use strict';

  angular.module('App.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutSizes, layoutPaths, $q, mainSidebarService) {

    $rootScope.$isMobile =  (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    $rootScope.$pageFinishedLoading = true;
    $rootScope.$mainSidebarService = mainSidebarService;
  }

})();