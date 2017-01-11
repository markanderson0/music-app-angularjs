(function () {
  'use strict';

  angular.module('App.theme')
      .service('util', util);

  /** @ngInject */
  function util() {

    this.isDescendant = function(parent, child) {
      var node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

  }

})();
