(function () {
  'use strict';

  angular.module('App.pages.search')
    .controller('SearchCtrl', SearchCtrl);

  /** @ngInject */
  function SearchCtrl($state, Search) {

    var vm = this;
    vm.query = $state.params.query;
    vm.results = [];

    Search.searchArtists(vm.query).then(function(results){
      vm.results = results[0];
    });
  }
})();