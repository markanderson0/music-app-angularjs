(function () {
  'use strict';

  angular.module('App.theme.components')
    .controller('AccountCtrl', AccountCtrl);

  /** @ngInject */
  function AccountCtrl($scope, $uibModal) {
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
  }


})();
