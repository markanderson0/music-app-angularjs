(function () {
  'use strict';

  angular.module('App.pages', [
    'ui.router',
    'ui.multiselect',
    'spotify',
    'vAccordion',
    'slick',

    'App.pages.profile',
    'App.pages.browse',
    'App.pages.merch',
    'App.pages.tickets',
    'App.pages.artist',
    'App.pages.video',
    'App.pages.search'
  ]);
})();
