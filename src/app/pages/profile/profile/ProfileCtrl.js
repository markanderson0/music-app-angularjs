(function () {
  'use strict';

  angular.module('App.pages.profile.profile')
    .controller('ProfileCtrl', ProfileCtrl);

  /** @ngInject */
  function ProfileCtrl($state, $filter, FollowingArtists, ArtistVideos) {

    var vm = this;

    if(!angular.isUndefined($state.params.user)){
      vm.userName = $state.params.user;
    }
    else{
      vm.userName = "testUser1";
    }
    vm.profilePic = "assets/pictures/angular.png";  
    vm.bannerPic = "assets/pictures/banner.png";

    vm.artists = FollowingArtists.getArtists();
    vm.responsive = ArtistVideos.getSlickResponsive();
    vm.videos = ArtistVideos.getUserVideos(vm.userName);
    vm.favourites = ArtistVideos.getFavourites();
  }

})();