(function () {
  'use strict';

  angular.module('App.pages.merch')
    .controller('MerchCtrl', MerchCtrl);

  /** @ngInject */
  function MerchCtrl(MerchCategories) {

    var vm = this; 
    vm.merchCat = MerchCategories.getMerchCats();
  }

})();
