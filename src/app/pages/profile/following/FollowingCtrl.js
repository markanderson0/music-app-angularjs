(function () {
  'use strict';

  angular.module('App.pages.profile.following')
    .controller('FollowingCtrl', FollowingCtrl);

  /** @ngInject */
  function FollowingCtrl(FollowingArtists) {

    var vm = this;

    vm.artists = FollowingArtists.getArtists();
  }


})();
