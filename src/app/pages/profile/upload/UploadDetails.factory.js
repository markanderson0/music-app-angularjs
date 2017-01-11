(function () {
  'use strict';

	angular.module('App.pages.profile.upload')
  	.factory('UploadDetails', UploadDetails);

  function UploadDetails($http, ArtistShows){
  	
  	var UploadDetails = {};

  	var artist = "";
    var events = [];
    var pages = 1;
    var currentPage = 1;
    var songs = [];
    var selected = "";

    UploadDetails.getEvent = function(eventYear, mbid) {  
      if(UploadDetails.eventYear !== eventYear || UploadDetails.currentArtist !== mbid){
        UploadDetails.currentArtist = mbid;  
        UploadDetails.eventYear = eventYear;
        events = [];
        pages = 1;
        currentPage = 1;
        UploadDetails.clearSongs();
      }  

      return $http.get('http://api.setlist.fm/rest/0.1/search/setlists.json', {
        params: {
          artistMbid: mbid,
          year: eventYear,
          p: currentPage
        }
      }).then(function(response){
        pages = Math.ceil(parseInt(response.data.setlists['@total']) / parseInt(response.data.setlists['@itemsPerPage']));
        currentPage++;
        if(response.data.setlists.setlist instanceof Array){
          response.data.setlists.setlist.map(function(item){
            events.push({date:item['@eventDate'], venue:item.venue['@name'], id:item['@id']});  
          });
        }
        else{
          events.push({date:response.data.setlists.setlist['@eventDate'], venue:response.data.setlists.setlist.venue['@name'], id:response.data.setlists.setlist['@id']});
        }  
        if(currentPage <= pages){
          UploadDetails.getEvent(eventYear, mbid);  
        }
      	return events;
      }, function(errorCallback){
      	events = [];
      	return events;
      });
    };

    UploadDetails.getSongs = function(eventId) {
      var selectedVenue = events.find(function(event){
        return event.id === eventId;
      }).venue;
      var selectedDate = events.find(function(event){
        return event.id === eventId;
      }).date;

      UploadDetails.selectedEvent = selectedDate + ", " + selectedVenue;
      UploadDetails.clearSongs();
      return $http.get('http://api.setlist.fm/rest/0.1/setlist/'+eventId+'.json')
      .then(function(response){
        songs = ArtistShows.getSetlist(response.data.setlist.sets);
        return songs;
      });
    };

    UploadDetails.clearSongs = function(){
      songs = [];
      selected = "";
      UploadDetails.selectedSong = "";
      UploadDetails.selectedSongs = [];
    }

    UploadDetails.addSong = function(title){
      UploadDetails.selectedSongs.push(title); 
    }

  	return UploadDetails;
  }	

})();    	