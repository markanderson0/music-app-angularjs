(function () {
  'use strict';

  	angular.module('App.pages.merch')
    	.service('MerchCategories', MerchCategories);

  	/** @ngInject */
  	function MerchCategories(){
	  	var merchCat = [{
		    label: 'apparel',
		    name: 'Apparel',
		    search: 'band tshirt',
		    cat: '11450'
		}, {
		    label: 'accessories',
		    name: 'Accessories',
		    search: 'band merch',
		    cat: '2329'
		}, {
		    label: 'music',
		    name: 'Music',
		    search: 'cds and vinyl',
		    cat: '11233'
		}, {
		    label: 'art',
		    name: 'Art',
		    search: 'band posters',
		    cat: '158658'
		}];

	    return{
	    	getMerchCats : function(){
	    		return merchCat;
	    	},
	    	getMerchSearch : function(val){
	    		return merchCat.find(function(merch){
	    			return merch.label === val;
	    		}).search;
	    	},
	    	getMerchCat : function(val){
	    		return merchCat.find(function(merch){
	    			return merch.label === val;
	    		}).cat;
	    	}
  		}

  }

  })();