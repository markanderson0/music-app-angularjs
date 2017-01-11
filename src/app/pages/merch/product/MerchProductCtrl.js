(function () {
  'use strict';

  angular.module('App.pages.merch')
    .controller('MerchProductCtrl', MerchProductCtrl);

  /** @ngInject */
  function MerchProductCtrl($window, $state, MerchProduct) {

    var vm = this;

    vm.selectedMerch = MerchProduct.selectedMerch;
    vm.merchQuantity = MerchProduct.merchQuantity;
    vm.merchSize = MerchProduct.merchSize;
    vm.merchPurchaseDetails = MerchProduct.merchPurchaseDetails;
    vm.merchPurchaseDetails.quantity = MerchProduct.merchPurchaseDetails.quantity;
    
    vm.id = $state.params.id;

    MerchProduct.getMerchItem(vm.id).then(function(merchProduct){
      if(vm.selectedMerch.length === 0 || vm.selectedMerch.name !== merchProduct[0][0].name){
        vm.selectedMerch = merchProduct[0][0]; 
      }
    })

    vm.openLink = function (url){
      $window.open(url);
    }
  }

})();
