(function () {
  'use strict';

  angular.module('App.pages.profile.settings')
    .controller('SettingsCtrl', SettingsCtrl);

  /** @ngInject */
  function SettingsCtrl($scope, fileReader, $filter, $uibModal) {
    var vm = this;

    vm.switches = [true, true, false, true, true, false];
    vm.picture = "assets/pictures/angular.png";
    vm.bannerPicture = "assets/pictures/banner.png";

    vm.removePicture = function () {
      vm.picture = $filter('appImage')('theme/no-photo.png');
      vm.noPicture = true;
    }

    vm.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();
    }

    vm.validateDate = function() {
      vm.day = document.getElementById("form-day").value;
      vm.month = document.getElementById("form-month").value;
      vm.year = document.getElementById("form-year").value;

      if(vm.year % 4 !== 0 && vm.month == 2 && vm.day > 28){
          vm.validDate = false;
      }
      else if(vm.month == 2 && vm.day > 29){
          vm.validDate = false;
      }
      else if((vm.month == 4 || vm.month == 6 || vm.month == 9 || vm.month == 11) && vm.day > 30){
          vm.validDate = false;
      }
      else if((vm.day == "") || (vm.month == "") || (vm.year == "")){
          vm.validDate = false;
      }
      else{
          vm.validDate = true;
      }    
    }

    vm.submitProfileForm = function() {
      vm.submitted = true;
      vm.validateDate();
    }


    vm.unconnect = function (item) {
      item.href = undefined;
    }

    vm.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    }

    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            vm.picture = result;
          });
    }
  }

})();
