(function () {
  'use strict';

	angular.module('App.theme.components')
  	.service('RightSidebar', RightSidebar);

	/** @ngInject */
	function RightSidebar(){	

    var sidebar = [];

    return{
    	collapseSidebar : function(){
        sidebar = [{collapsed: true, expanded: false}];
    		return sidebar;
    	},
    	expandSidebar : function(){
        sidebar = [{collapsed: false, expanded: true}];
    		return sidebar;
    	},
      noSidebar : function(){
        sidebar = [{collapsed: false, expanded: false}];
        return sidebar;
      },
      isCollapsed : function(){
        return sidebar;
      },
      checkSidebarWidth : function(width){
        if(width < 1200 && width > 600){
          return this.collapseSidebar();
        }
        else if(width < 601){
          return this.noSidebar();
        }
        else {
          return this.expandSidebar();
        }
      }
	  }
  }

})();