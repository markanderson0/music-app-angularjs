(function() {
  'use strict';

  angular.module('App.tplSkin')
      .directive('tplSkinPanel', tplSkinPanel);

  tplSkinPanel.$inject = ['tplSkinEnum', 'tplSkinManager'];
  function tplSkinPanel(tplSkinEnum, tplSkinManager) {
    return {
      templateUrl: 'app/tplSkin/tplSkinPanel.html',
      link: function(scope) {
        scope.skins = tplSkinEnum;

        scope.setActiveSkin = function(option) {
          tplSkinManager.setActiveSkin(option);
        };
      }
    };
  }

})();
