(function () {
  'use strict';

  angular.module('App.pages.profile.settings')
    .factory('Settings', Settings);

  /** @ngInject */
  function Settings($http, $window) {

    var vm = this;

    Settings.updateProfile = function(){

    }

    return Settings;
  }

})();