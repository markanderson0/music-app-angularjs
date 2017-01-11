(function () {
  'use strict';

  angular.module('App.theme.components')
      .directive('mainSidebarToggleMenu', mainSidebarToggleMenu)
      .directive('mainSidebarCollapseMenu', mainSidebarCollapseMenu)
      .directive('mainUiSrefTogglingSubmenu', mainUiSrefTogglingSubmenu)
      .directive('mainUiSrefToggler', mainUiSrefToggler);

  /** @ngInject */
  function mainSidebarToggleMenu(mainSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          scope.$apply(function() {
            mainSidebarService.toggleMenuCollapsed();
          });
        });
      }
    };
  }

  /** @ngInject */
  function mainSidebarCollapseMenu(mainSidebarService) {
    return {
      restrict: 'A',
      link: function(scope, elem) {
        elem.on('click', function($evt) {
          $evt.originalEvent.$sidebarEventProcessed = true;
          if (!mainSidebarService.isMenuCollapsed()) {
            scope.$apply(function() {
              mainSidebarService.setMenuCollapsed(true);
            });
          }
        });
      }
    };
  }

  /** @ngInject */
  function mainUiSrefTogglingSubmenu($state) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var stateToWatch = scope.$eval(attrs.mainUiSrefTogglingSubmenu);

        if (_isState($state.current)) {
          el.parent().addClass('main-sidebar-item-expanded');
        }

        scope.$on('$stateChangeStart', function (event, toState) {
          if (!_isState(toState) && el.parent().hasClass('main-sidebar-item-expanded')) {
            el.slideToggle();
            el.parent().removeClass('main-sidebar-item-expanded');
          }
        });

        scope.$on('$stateChangeSuccess', function (event, toState) {
          if (_isState(toState) && !el.parent().hasClass('main-sidebar-item-expanded')) {
            el.slideToggle();
            el.parent().addClass('main-sidebar-item-expanded');
          }
        });

        function _isState(state) {
          return state && state.name.indexOf(stateToWatch) == 0;
        }
      }
    };
  }

  /** @ngInject */
  function mainUiSrefToggler() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        el.on('click', function() {
          el.next().slideToggle();
          el.parent().toggleClass('main-sidebar-item-expanded');
        });
      }
    };
  }

})();
