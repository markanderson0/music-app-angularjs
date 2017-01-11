(function () {
  'use strict';

	angular.module('App.pages.tickets')
  	.factory('TicketsSearch', TicketsSearch);

  function TicketsSearch($http, $compile){
  	
  	var TicketsSearch = {};
    TicketsSearch.ticket = {};
    TicketsSearch.ticket.oldSearch = "";
    TicketsSearch.tickets = [];    
    var pageNum = 0;
    var apiKey = "XXXXX";
    var endDateTime = "2018-01-01T00:00:00Z";

    TicketsSearch.searchEvents = function(search){
      if(TicketsSearch.ticket.oldSearch !== search){
        TicketsSearch.ticket.oldSearch = search;
        TicketsSearch.tickets = [];
        pageNum = 0;       
      }
      return $http.get('https://app.ticketmaster.com/discovery/v2/events.json', {
          params: {
            keyword: search + " Music",
            page: pageNum,
            endDateTime: endDateTime,
            apikey: apiKey
          }
      }).then(function(response){
        if(response.data.hasOwnProperty("_embedded")){
          response.data._embedded.events.map(function(event){
            TicketsSearch.tickets.url = event.url;
            TicketsSearch.tickets.date = event.dates.start.localDate;
            event._embedded.venues.map(function(venue){    
              getVenueData(venue);

              if(TicketsSearch.tickets.length > 0){
                //If performing multi night shows get location of prev night  
                if(TicketsSearch.tickets[TicketsSearch.tickets.length-1].venue === venue.name &&
                   TicketsSearch.tickets[TicketsSearch.tickets.length-1].city === venue.city.name &&
                   TicketsSearch.tickets[TicketsSearch.tickets.length-1].country === venue.country.countryCode &&
                   (!(venue.hasOwnProperty('location') && TicketsSearch.tickets[TicketsSearch.tickets.length-1].lat === 1000))){
                  TicketsSearch.tickets.latitude = TicketsSearch.tickets[TicketsSearch.tickets.length-1].lat;
                  TicketsSearch.tickets.longitude = TicketsSearch.tickets[TicketsSearch.tickets.length-1].lng;
                }
                //If no location given
                else if(!(venue.hasOwnProperty('location'))){
                  TicketsSearch.tickets.latitude = 1000;
                  TicketsSearch.tickets.longitude = 1000;
                }
                //If first night or only night
                else{
                  TicketsSearch.tickets.latitude = venue.location.latitude;
                  TicketsSearch.tickets.longitude = venue.location.longitude;
                } 
              }
              //For first element
              else if(!(venue.hasOwnProperty('location'))){
                TicketsSearch.tickets.latitude = 1000;
                TicketsSearch.tickets.longitude = 1000;
              }
              else{
                TicketsSearch.tickets.latitude = venue.location.latitude;
                TicketsSearch.tickets.longitude = venue.location.longitude;
              }   
            });
            //Check if its a tribute act
            if(event.name.toLowerCase().indexOf("tribute") === -1 && event.name.toLowerCase().indexOf(search[0].toLowerCase()) !== -1){
              TicketsSearch.tickets.push({name:event.name, url:event.url, date:event.dates.start.localDate, 
              venue:TicketsSearch.tickets.venue, city:TicketsSearch.tickets.city, state:TicketsSearch.tickets.state, 
              country:TicketsSearch.tickets.country, lat:TicketsSearch.tickets.latitude, lng:TicketsSearch.tickets.longitude});
            }
          });

          //If there are more pages keep going
          if(pageNum < response.data.page.totalPages){
            pageNum++;
            TicketsSearch.searchEvents(TicketsSearch.ticket.oldSearch);
          }
        }
        else{
          TicketsSearch.tickets = [];
        }  

        return TicketsSearch.tickets;
      });
    }

    TicketsSearch.simpleSearchEvents = function(search){
      TicketsSearch.tickets = [];
      pageNum = 0;       
      return $http.get('https://app.ticketmaster.com/discovery/v2/events.json', {
          params: {
            keyword: search + " Music",
            page: pageNum,
            endDateTime: endDateTime,
            apikey: apiKey
          }
      }).then(function(response){
        if(response.data.hasOwnProperty("_embedded")){
          response.data._embedded.events.map(function(event){
            TicketsSearch.tickets.url = event.url;
            TicketsSearch.tickets.date = event.dates.start.localDate;
            event._embedded.venues.map(function(venue){
              getVenueData(venue); 
            });
            if(event.name.toLowerCase().indexOf("tribute") === -1 && event.name.toLowerCase().indexOf(search[0].toLowerCase()) !== -1){
              TicketsSearch.tickets.push({name:event.name, url:event.url, date:event.dates.start.localDate, 
              venue:TicketsSearch.tickets.venue, city:TicketsSearch.tickets.city, state:TicketsSearch.tickets.state, 
              country:TicketsSearch.tickets.country, lat:TicketsSearch.tickets.latitude, lng:TicketsSearch.tickets.longitude});
            }
          });
        }
        else{
          TicketsSearch.tickets = [];
        }  
        getProfileTickets(TicketsSearch.tickets);
        return TicketsSearch.tickets;
      });      
    }

    var getVenueData = function(venue){
      if(venue.hasOwnProperty('name')){
        TicketsSearch.tickets.venue = venue.name;
      }  
      else{
        TicketsSearch.tickets.venue = "";
      }           
      if(venue.hasOwnProperty('city')){
        TicketsSearch.tickets.city = venue.city.name;
      }    
      else{
        TicketsSearch.tickets.city = "";
      }          
      if(venue.hasOwnProperty('country')){
        TicketsSearch.tickets.country = venue.country.countryCode;
      }
      else{
        TicketsSearch.tickets.country = "";
      }
      if(venue.hasOwnProperty('state')){
        TicketsSearch.tickets.state = venue.state.stateCode;
      }
      else{
        TicketsSearch.tickets.state = "";
      }      
    }

    var getProfileTickets = function(tickets){
      if(tickets.length !== 0){
        if(tickets.length > 4){
          TicketsSearch.displayTickets = tickets.slice(0, 4);
        }
        else{
          TicketsSearch.displayTickets = tickets;
        }
        TicketsSearch.hasTickets = true;
      }
      else{
        TicketsSearch.hasTickets = false;
      } 
    }
    
  	return TicketsSearch;
  }	

})();    	