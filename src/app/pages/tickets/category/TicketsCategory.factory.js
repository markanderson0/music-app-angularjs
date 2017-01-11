(function () {
  'use strict';

	angular.module('App.pages.tickets')
  	.factory('TicketsCategory', TicketsCategory);

  function TicketsCategory($http, TicketsGenres){
  	
  	var TicketsCategory = {};
    TicketsCategory.ticket = {};
    TicketsCategory.ticket.oldSearch = "";
    TicketsCategory.catItem = [];
    var pageNo = 0;
    var ticketMasterApiKey = "XXXXX";
    var endDateTime = "2018-01-01T00:00:00Z";
    var importioApiKey = "XXXXX";
  
    TicketsCategory.getFeatured = function(val, genre, page){
      TicketsCategory.topEvents = [];
      TicketsCategory.catItem = [];
      return $http.get("https://extraction.import.io/query/extractor/"+val, {
        params: {
          _apikey: importioApiKey,
          url: "https://www.ticketcity.com/concerts/"+genre+".html" 
        }
      }).then(function(response){
        response.data.extractorData.data.map(function(item){
          item.group.map(function(groupItem){
            groupItem['Artists'].map(function(link){
              if(genre === "concerts" && page === ""){
                if(link.text !== "All Music Festivals"){
                  TicketsCategory.catItem.push({name: link.text});
                  TicketsCategory.getTopFestivals(link.text);
                } 
              }
              else{
                TicketsCategory.catItem.push({name: link.text});               
                TicketsCategory.getTopEvents(link.text, page);
              }
            });
          });
        });
        return TicketsCategory.topEvents;
      })
    }

    TicketsCategory.getTopEvents = function(val, page){
      if(page === "home"){
        var items = 12;
      }
      else{
        var items = 4;
      }
      return $http.get("https://app.ticketmaster.com/discovery/v2/events.json", {
        params: {
          keyword: val,
          endDateTime: endDateTime,
          apikey: ticketMasterApiKey
        }
      }).then(function(response){
        response.data._embedded.events.map(function(item){
          if(item._embedded.hasOwnProperty('attractions')){
            var attr = item._embedded.attractions[0];
            if(attr.name === val && (!(in_array(TicketsCategory.topEvents, "name", val))) && TicketsCategory.topEvents.length < items){
              TicketsCategory.topEvents.push({image: attr.images[0].url, name: val});
            }
          }  
        });
        return TicketsCategory.topEvents;
      });
    }

    TicketsCategory.getTopFestivals = function(val){
      var items = 4;
      return $http.get("https://app.ticketmaster.com/discovery/v2/events.json", {
        params: {
          keyword: val,
          endDateTime: endDateTime,
          apikey: ticketMasterApiKey
        }
      }).then(function(response){
        response.data._embedded.events.map(function(item){
          var festName = val.substring(0, val.indexOf(" "));
          if(item._embedded.attractions[0].name.indexOf(festName) > -1 && (!(in_array(TicketsCategory.topEvents, "name", val))) 
            && TicketsCategory.topEvents.length < items && item.classifications[0].segment.name === "Music"){
            TicketsCategory.topEvents.push({image: item._embedded.attractions[0].images[0].url, name: val});
          }
        });
        return TicketsCategory;
      });
    }

    TicketsCategory.getCatEvents = function(val, pageNum){
      TicketsCategory.ticket.oldSearch = val;
      return $http.get("https://app.ticketmaster.com/discovery/v2/events.json", {
        params: {
          keyword: val,
          endDateTime: endDateTime,
          apikey: ticketMasterApiKey,
          page: pageNum
        }
      }).then(function(response){
        response.data._embedded.events.map(function(item){
          if(item.hasOwnProperty('_embedded')){
            if(item._embedded.hasOwnProperty('attractions')){
              if(item._embedded.attractions[0].hasOwnProperty('name')){
                if((!(in_array(TicketsCategory.catItem, "name", item._embedded.attractions[0].name))) 
                  &&  (item._embedded.attractions[0].name !== "") && item.classifications[0].segment.name === "Music"){
                  if(val === "festival"){
                    if(item.name.toLowerCase().indexOf("fest") > -1){
                      TicketsCategory.catItem.push({name: item.name});
                    }
                  }
                  else{
                    TicketsCategory.catItem.push({name: item._embedded.attractions[0].name});                    
                  }

                }
              } 
            } 
          } 
        });
        return TicketsCategory.catItem;
      });     
    }

    TicketsCategory.getMoreResults = function(){
      pageNo++;
      TicketsCategory.getCatEvents(TicketsCategory.ticket.oldSearch, pageNo);
    }


    function in_array(array, key, val) {
      for(var i=0; i<array.length; i++) {
          if(array[i][key] === val){
            return true;
          } 
      }
      return false;
    }    

  	return TicketsCategory;
  }	

})();    	