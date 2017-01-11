(function () {
  'use strict';

  angular.module('App.pages.profile.following')
    .factory('Following', Following);

  /** @ngInject */
  function Following($http, $window) {

    var vm = this;

    Following.someFunction = function(){

    }

    return Following;
  }

})();