(function () {
  'use strict';

	angular.module('App.pages.merch')
  	.factory('MerchList', MerchList);

  function MerchList($http){
  	
  	var MerchList = {};
  	MerchList.merch = [];
  	MerchList.merchSearch = {};
  	MerchList.merchSort = "Best Match";
    MerchList.merchSortOptions = "Best Match,Price (Asc),Price (Dec)";
    MerchList.apparelPage = false;
    MerchList.vinylPage = false;

    var categoryName = "";
    var categoryId = "";
    var pageNumber = 1;
    var oldSort = "";

    var apiKey = "XXXXX";

  	MerchList.getMerch = function(name, id, pageNum, sort, merch){
    	MerchList.merch = merch;
      categoryName = name;
      categoryId = id;
      if(angular.isUndefined(sort)){
        MerchList.merchSort = "Best Match";
        var sort = "BestMatch";
      }
      else{
        MerchList.merchSort = sort;
        var sort = setSortValue(sort);        
      }

  		if(angular.isUndefined(merch)){
  			MerchList.merch = [];
  		}
      else{
        MerchList.merch = merch;        
      }

			checkMerchPage(name);   

	    return $http.get("http://svcs.ebay.com/services/search/FindingService/v1", {
        params: {
	        "OPERATION-NAME": "findItemsAdvanced",
	        "SERVICE-VERSION": "1.0.0",
	        "SECURITY-APPNAME": apiKey,
	        "RESPONSE-DATA-FORMAT": "JSON",
	        "keywords": categoryName,
	        "categoryId": categoryId,
	        "sortOrder": sort,
	        "outputSelector": "AspectHistogram",
	        "paginationInput.pageNumber": pageNum,
	        "itemFilter(0).name": "Condition",
	        "itemFilter(0).value": "New"       
        }
	    }).then(function(response){
        if(response.data.findItemsAdvancedResponse[0].searchResult[0].hasOwnProperty("item")){
  	    	response.data.findItemsAdvancedResponse[0].searchResult[0].item.map(function(item){
          	var itemId = item.itemId[0];
          	var itemName = item.title[0];
          	var itemUrl = item.viewItemURL[0];
          	if(item.hasOwnProperty('galleryURL')){
          		var itemPic = item.galleryURL[0];            
          	}
          	var itemPrice = item.sellingStatus[0].convertedCurrentPrice[0].__value__;
          	if(item.shippingInfo[0].hasOwnProperty('shippingServiceCost')){
          		var itemShipPrice = item.shippingInfo[0].shippingServiceCost[0].__value__;
          		var totalPrice = parseFloat(itemPrice) + parseFloat(itemShipPrice);            
          	}
          	else{
          		var totalPrice = itemPrice;
          	}    
          	if(itemPic !== "http://thumbs1.ebaystatic.com/pict/04040_0.jpg" && (!(in_array(MerchList.merch, itemName)))){
          		MerchList.merch.push({pic: itemPic, price: totalPrice, name: itemName,  url: itemUrl, id: itemId});
          	} 
  	    	});
          getProfileMerch(MerchList.merch);
	        return MerchList.merch;
        }
        else{
          MerchList.merch = [];
          getProfileMerch(MerchList.merch);
          return MerchList.merch;
        }  
	    }, function(errorCallback){
        MerchList.merch = [];
        getProfileMerch(MerchList.merch);
        return MerchList.merch;
      });
  	}

    MerchList.searchMerch = function(){
      if(categoryName !== MerchList.merchSearch.search){
      	MerchList.merchSort = "Best Match";
        MerchList.getMerch(MerchList.merchSearch.search);
      }
    }  	

  	MerchList.getMoreMerch = function(){
      pageNumber++;
      MerchList.getMerch(categoryName, categoryId, pageNumber, MerchList.merchSort, MerchList.merch);
    }

    MerchList.sortResults = function(sortOption){
      MerchList.merch = []; 
      MerchList.getMerch(categoryName, categoryId, pageNumber, sortOption, MerchList.merch);
    }   

    var setSortValue = function(sortOption){
      if(sortOption === "Best Match"){  
        return "BestMatch";   
      }
      else if(sortOption === "Price (Asc)"){
        return "PricePlusShippingHighest";       
      }
      else if(sortOption === "Price (Dec)"){
        return "PricePlusShippingLowest";       
      }      
    } 

    MerchList.filterResults = function(val){
      switch(val){
        case "Mens":
          categoryId = 15687;
          break;
        case "Womens":
          categoryId = 63869;
          break;
        case "CDs":
          categoryName = "cd";
          categoryId = 176984;
          break;
        case "Vinyl":
          categoryName = "vinyl";
          categoryId = 176985;
          break;      
      }
      MerchList.merch = []; 
      MerchList.merchSort = "Best Match";
      MerchList.getMerch(categoryName, categoryId, pageNumber, "Best Match", MerchList.merch);
    }

    var checkMerchPage = function(val){
      if(val === "band tshirt"  || val.indexOf("shirt") > -1 ){
        MerchList.apparelPage = true;
        MerchList.musicPage = false;
      }
      else if(val === "cds and vinyl" || val === "vinyl" || val === "cd"){
        MerchList.apparelPage = false;
        MerchList.musicPage = true;
      }
      else{
        MerchList.apparelPage = false;
        MerchList.musicPage = false;
      }
    }

    var getProfileMerch = function(merch){
      if(merch.length !== 0){
        if(merch.length > 3){
          MerchList.displayMerch = merch.slice(0, 3);
        }
        else{
          MerchList.displayMerch = merch;
        }
        MerchList.hasMerch = true;
      }
      else{
        MerchList.hasMerch = false;
      } 
    }

    function in_array(array, name) {
      for(var i=0;i<array.length;i++) {
          if(array[i].name === name){
            return true;
          } 
      }
      return false;
    }

  	return MerchList;
  }	

})();    	