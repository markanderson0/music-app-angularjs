(function () {
  'use strict';

  angular.module('App.theme.components')
    .controller('MainSidebarCtrl', MainSidebarCtrl);

  /** @ngInject */
  function MainSidebarCtrl($scope, mainSidebarService, $uibModal) {

    $scope.profilePic = "assets/pictures/angular.png";  

    /** Modal **/
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };

    $scope.validateDate = function() {
      $scope.day = document.getElementById("day").value;
      $scope.month = document.getElementById("month").value;
      $scope.year = document.getElementById("year").value;
        if($scope.year % 4 !== 0 && $scope.month == 2 && $scope.day > 28){
            $scope.validDate = false;
        }
        else if($scope.month == 2 && $scope.day > 29){
            $scope.validDate = false;
        }
        else if(($scope.month == 4 || $scope.month == 6 || $scope.month == 9 || $scope.month == 11) && $scope.day > 30){
            $scope.validDate = false;
        }
        else if(($scope.day == "") || ($scope.month == "") || ($scope.year == "")){
            $scope.validDate = false;
        }
        else{
            $scope.validDate = true;
        }    
    };

    $scope.submitForm = function() {
      $scope.submitted = true;
      $scope.validateDate();
      if ($scope.userForm.$valid) {
        alert('our form is amazing');
      }

    };

    /** Popovers **/
    $scope.search = {
      templateUrl: 'search.html'
    };
    $scope.loggedOut = {
      templateUrl: 'logged-out.html'
    };
    $scope.loggedIn = {
      templateUrl: 'logged-in.html'
    };

    $scope.mainMenuItems = mainSidebarService.getMainMenuItems();
    $scope.defaultMainSidebarState = $scope.mainMenuItems[0].stateRef;

    $scope.profileMenuItems = mainSidebarService.getProfileMenuItems();
    $scope.defaultProfileSidebarState = $scope.profileMenuItems[0].stateRef;

    $scope.hoverItem = function ($event) {
      $scope.showHoverElem = true;
      $scope.hoverElemHeight =  $event.currentTarget.clientHeight;
      $scope.hoverElemTop = $event.currentTarget.getBoundingClientRect().top;
    };

    $scope.$on('$stateChangeSuccess', function () {
      if (mainSidebarService.canSidebarBeHidden()) {
        mainSidebarService.setMenuCollapsed(true);
      }
    });
  }
})();