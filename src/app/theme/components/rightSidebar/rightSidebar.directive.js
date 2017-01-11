(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  angular.module('App.theme')
      .directive('rightSidebar', rightSidebar);

  /** @ngInject */
  function rightSidebar() {
    return {
      restrict: "E",
      transclude: true,
      controller: "RightSidebarCtrl",
      templateUrl: "app/theme/components/rightSidebar/right-sidebar.html"
    };
  }

})();
