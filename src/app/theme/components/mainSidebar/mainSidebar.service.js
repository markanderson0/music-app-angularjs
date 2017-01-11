(function() {
  'use strict';

  angular.module('App.theme.components')
      .provider('mainSidebarService', mainSidebarServiceProvider);

  /** @ngInject */
  function mainSidebarServiceProvider() {
    var staticMainMenuItems = [];
    var staticProfileMenuItems = [];

    this.addStaticItem = function() {
      staticMainMenuItems.push.apply(staticMainMenuItems, arguments);
      staticProfileMenuItems.push.apply(staticProfileMenuItems, arguments);
    };

    /** @ngInject */
    this.$get = function($state, layoutSizes) {
      return new _factory();

      function _factory() {
        var isMenuCollapsed = shouldMenuBeCollapsed();

        this.getMainMenuItems = function() {
          var states = defineMainMenuItemStates();
          var mainMenuItems = states.filter(function(itemMain) {
            return itemMain.level == 0;
          });

          mainMenuItems.forEach(function(itemMain) {
            var children = states.filter(function(child) {
              return child.level == 1 && child.name.indexOf(itemMain.name) === 0;
            });
            itemMain.subMainMenu = children.length ? children : null;
          });

          return mainMenuItems.concat(staticMainMenuItems);
        };

        this.getProfileMenuItems = function() {
          var states = defineProfileMenuItemStates();
          var profileMenuItems = states.filter(function(itemProfile) {
            return itemProfile.level == 0;
          });

          profileMenuItems.forEach(function(itemProfile) {
            var children = states.filter(function(child) {
              return child.level == 1 && child.name.indexOf(itemProfile.name) === 0;
            });
            itemProfile.subProfileMenu = children.length ? children : null;
          });

          return profileMenuItems.concat(staticProfileMenuItems);
        };

        this.shouldMenuBeCollapsed = shouldMenuBeCollapsed;
        this.canSidebarBeHidden = canSidebarBeHidden;

        this.setMenuCollapsed = function(isCollapsed) {
          isMenuCollapsed = isCollapsed;
        };

        this.isMenuCollapsed = function() {
          return isMenuCollapsed;
        };

        this.toggleMenuCollapsed = function() {
          isMenuCollapsed = !isMenuCollapsed;
        };

        function defineMainMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.sidebarMeta;
              })
              .map(function(s) {
                var meta = s.sidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function defineProfileMenuItemStates() {
          return $state.get()
              .filter(function(s) {
                return s.profileSidebarMeta;
              })
              .map(function(s) {
                var meta = s.profileSidebarMeta;
                return {
                  name: s.name,
                  title: s.title,
                  level: (s.name.match(/\./g) || []).length,
                  order: meta.order,
                  icon: meta.icon,
                  stateRef: s.name,
                };
              })
              .sort(function(a, b) {
                return (a.level - b.level) * 100 + a.order - b.order;
              });
        }

        function shouldMenuBeCollapsed() {
          return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
        }

        function canSidebarBeHidden() {
          return window.innerWidth <= layoutSizes.resWidthHideSidebar;
        }
      }

    };

  }
})();
