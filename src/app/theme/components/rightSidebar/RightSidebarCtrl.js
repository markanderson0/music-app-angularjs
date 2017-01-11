(function () {
  'use strict';

  angular.module('App.theme.components')
    .controller('RightSidebarCtrl', RightSidebarCtrl);

  /** @ngInject */
  function RightSidebarCtrl($scope, $window, RightSidebar) {
    var width = $window.innerWidth;

    var sidebar = RightSidebar.checkSidebarWidth(width);
    $scope.expanded = sidebar[0].expanded;
    $scope.collapsed = sidebar[0].collapsed;   

    angular.element($window).bind('resize', function () {
        width = $window.innerWidth;
        $scope.$digest();

        var sidebar = RightSidebar.checkSidebarWidth(width);
        $scope.expanded = sidebar[0].expanded;
        $scope.collapsed = sidebar[0].collapsed;
    });
    
    $scope.collapseRightSidebar = function(){
        var sidebar = RightSidebar.collapseSidebar();
        $scope.expanded = sidebar[0].expanded;
        $scope.collapsed = sidebar[0].collapsed;
    }
    $scope.expandRightSidebar = function(){
      var sidebar = RightSidebar.expandSidebar();
        $scope.expanded = sidebar[0].expanded;
        $scope.collapsed = sidebar[0].collapsed;
    }      
  }
})();