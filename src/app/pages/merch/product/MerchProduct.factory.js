(function () {
  'use strict';

	angular.module('App.pages.merch')
  	.factory('MerchProduct', MerchProduct);

  function MerchProduct($http){
  	
  	var MerchProduct = {};

  	var apiKey = "XXXXX";

  	MerchProduct.merchQuantity = "1,2,3,4,5";
    MerchProduct.merchSize = "S,M,L,XL,XXL";
    MerchProduct.merchPurchaseDetails = {};
    MerchProduct.merchPurchaseDetails.quantity = "1";
    MerchProduct.selectedMerch = [];

  	MerchProduct.getMerchItem = function(id){
    	MerchProduct.selectedMerch = [];
	    return $http.get("http://svcs.ebay.com/services/search/FindingService/v1", {
	        params: {
		        "OPERATION-NAME": "findItemsAdvanced",
		        "SERVICE-VERSION": "1.0.0",
		        "SECURITY-APPNAME": apiKey,
		        "RESPONSE-DATA-FORMAT": "JSON",
		        "keywords": id,
		        "paginationInput.entriesPerPage": 1        
	        }
	    }).then(function(response){
	    	return response.data.findItemsAdvancedResponse[0].searchResult[0].item.map(function(item){
    	        var itemTitle = item.title[0];
		        var itemUrl = item.viewItemURL[0];
		        var itemPic = item.galleryURL[0];
		        var itemSellPrice = item.sellingStatus[0].convertedCurrentPrice[0].__value__;
		        if(item.shippingInfo[0].hasOwnProperty('shippingServiceCost')){
		        	var itemShipPrice = item.shippingInfo[0].shippingServiceCost[0].__value__;
		        	var itemPrice = parseFloat(itemSellPrice) + parseFloat(itemShipPrice);            
		        }
		        else{
		        	var itemPrice = itemSellPrice;
		        }  
		        MerchProduct.selectedMerch.push({name: itemTitle, url: itemUrl, pic: itemPic, price: itemPrice });
		        return MerchProduct.selectedMerch;
	    	});
	    });
  	}

  	MerchProduct.setMerchItem = function(name, price, url, pic){
			MerchProduct.selectedMerch = {name: name, url: url, pic: pic, price: price}; 		
  	}

  	return MerchProduct;
  }	

})();    	