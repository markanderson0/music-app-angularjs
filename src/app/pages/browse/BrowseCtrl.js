(function () {
  'use strict';

  angular.module('App.pages.browse')
    .controller('BrowseCtrl', BrowseCtrl);

  /** @ngInject */
  function BrowseCtrl($state, $window, Browse, BrowseGenres) {

    var vm = this;

    vm.browseArtists = [];
   	vm.loadMoreArtists = true;
    
    if($state.params.hasOwnProperty("genre")){
      vm.genre = $state.params.genre;
      vm.browseArtists = Browse.getGenreArtists(vm.genre);
      vm.loadMoreArtists = Browse.loadMoreArtists;   
    }
    else{
      vm.browseGenres = BrowseGenres.getBrowseGenres();  
    }

    vm.getMoreArtists = function(){
      vm.browseArtists = Browse.getGenreArtists(vm.genre);
    	vm.loadMoreArtists = Browse.loadMoreArtists;
    }
  }

})();