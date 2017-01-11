(function () {
  'use strict';

  angular.module('App.theme.components')
      .directive('mainSidebar', mainSidebar);

  /** @ngInject */
  function mainSidebar($timeout, mainSidebarService, util, layoutSizes) {
    var jqWindow = $(window);
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/mainSidebar/main-sidebar.html',
      controller: 'MainSidebarCtrl',
      link: function(scope, el) {

        scope.menuHeight = el[0].childNodes[0].clientHeight - 84;
        jqWindow.on('click', _onWindowClick);
        jqWindow.on('resize', _onWindowResize);

        scope.$on('$destroy', function() {
          jqWindow.off('click', _onWindowClick);
          jqWindow.off('resize', _onWindowResize);
        });

        function _onWindowClick($evt) {
          if (!util.isDescendant(el[0], $evt.target) &&
              !$evt.originalEvent.$sidebarEventProcessed &&
              !mainSidebarService.isMenuCollapsed() &&
              mainSidebarService.canSidebarBeHidden()) {
            $evt.originalEvent.$sidebarEventProcessed = true;
            $timeout(function () {
              mainSidebarService.setMenuCollapsed(true);
            }, 10);
          }
        }

        // watch window resize to change menu collapsed state if needed
        function _onWindowResize() {
          var newMenuCollapsed = mainSidebarService.shouldMenuBeCollapsed();
          var newMenuHeight = _calculateMenuHeight();
          if (newMenuCollapsed != mainSidebarService.isMenuCollapsed() || scope.menuHeight != newMenuHeight) {
            scope.$apply(function () {
              scope.menuHeight = newMenuHeight;
              mainSidebarService.setMenuCollapsed(newMenuCollapsed)
            });
          }
        }

        function _calculateMenuHeight() {
          return el[0].childNodes[0].clientHeight - 84;
        }
      }
    };
  }

})();