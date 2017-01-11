(function () {
  'use strict';

  angular.module('App.pages.merch')
    .controller('MerchListCtrl', MerchListCtrl);

  /** @ngInject */
  function MerchListCtrl($http, $window, $state, MerchProduct, MerchList, MerchCategories) {

    var vm = this;

    vm.merch = [];
    vm.merchSearch = MerchList.merchSearch;
    vm.selectedMerch = MerchProduct.selectedMerch;
    vm.merchSearch = MerchList.merchSearch;
    vm.merchSortOptions = MerchList.merchSortOptions;
    
    vm.merchCat = MerchCategories.getMerchCats();

    vm.category = $state.params.category;
    vm.query = $state.params.query;

    if(!angular.isUndefined(vm.category)){
      var categoryName = MerchCategories.getMerchSearch(vm.category);
      var categoryId = MerchCategories.getMerchCat(vm.category); 
      MerchList.getMerch(categoryName, categoryId, 1, "Best Match", vm.merch).then(function(merch){
        vm.merch = merch;
        vm.merchSort = MerchList.merchSort;
        vm.apparelPage = MerchList.apparelPage;
        vm.musicPage = MerchList.musicPage;
      });
    }
    else if(!angular.isUndefined(vm.query)){
      MerchList.getMerch(vm.query).then(function(merch){
        vm.merch = merch;
        vm.merchSort = MerchList.merchSort;
        vm.apparelPage = MerchList.apparelPage;
        vm.musicPage = MerchList.musicPage;
      });
    }  

    vm.setMerchItem = function(name, url, pic, price){
      MerchProduct.setMerchItem(name, url, pic, price);
    }

    vm.getMoreMerch = function(){
      MerchList.getMoreMerch();
    }

    vm.sortResults = function(){   
      MerchList.sortResults(vm.merchSort); 
      vm.merchSort = MerchList.merchSort;
      vm.merch = MerchList.merch;
    }

    vm.filterResults = function(val){
      MerchList.filterResults(val);
      vm.merchSort = MerchList.merchSort;
      vm.merch = MerchList.merch;
    }

    vm.searchMerch = function(){
      MerchList.searchMerch();
      vm.merch = MerchList.merch;
    }
  }

})();
