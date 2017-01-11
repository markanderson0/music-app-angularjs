(function () {
  'use strict';

	angular.module('App.pages.artist')
  	.service('ArtistVideos', ArtistVideos);

	/** @ngInject */
	function ArtistVideos(){

    var slickResponsive = [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
    }];

    var favourites = [{
      id: "123qwe",
      artistName: "Radiohead",
      videos: [{
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser1",
          playlistId: "p123",
          videoId: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
          time: "20:00",
          views: 100,
          audio: 5,
          video: 7
        },
        {
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser1",
          playlistId: "p123",
          videoId: "vid234",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Karma Police"],
          songsString: "Karma Police",
          time: "4:00",
          views: 1000,
          audio: 4,
          video: 8
        },
        {
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser2",
          playlistId: "p234",
          videoId: "vid567",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Burn the Witch"],
          songsString: "Burn the Witch",
          time: "4:00",
          views: 1000000000,
          audio: 10,
          video: 10
        },
        {
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser1",
          playlistId: "p123",
          videoId: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
          time: "20:00",
          views: 100,
          audio: 5,
          video: 7
        },
        {
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser1",
          playlistId: "p123",
          videoId: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
          time: "20:00",
          views: 100,
          audio: 5,
          video: 7
        },
        {
          showId: "show123",
          date: "08-07-2016",
          venue: "Passeio Marítimo de Algés",
          location: "Oeiras, Portugal",
          user: "testUser1",
          playlistId: "p123",
          videoId: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
          time: "20:00",
          views: 100,
          audio: 5,
          video: 7
        }]
    },
    {
      id: "234wer",
      artistName: "Red Hot Chili Peppers",
      videos: [{
          showId: "show456",
          date: "15-07-2016",
          venue: "Le Breton Festival Park",
          location: "Ottawa, Canada",
          user: "testUser1",
          playlistId: "p789",
          videoId: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Intro Jam", "Can't Stop", "Dani California", "Scar Tissue", "Dark Necessities"],
          songsString: "Intro Jam | Can't Stop | Dani California | Scar Tissue | Dark Necessities",
          time: "20:00",
          views: 86,
          audio: 5,
          video: 6
        },
        {  
          showId: "show456",
          date: "15-07-2016",
          venue: "Le Breton Festival Park",
          location: "Ottawa, Canada",
          user: "testUser1",
          playlistId: "p789",
          videoId: "vid234",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["The Adventures of Rain Dance Maggie"],
          songsString: "The Adventures of Rain Dance Maggie",
          time: "4:00",
          views: 648,
          audio: 2,
          video: 2         
        },
        {  
          showId: "show345",
          date: "09-07-2016",
          venue: "Otkritie Arena",
          location: "Moscow, Russia",
          user: "testUser5",
          playlistId: "p876",
          videoId: "vi123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Blood Sugar Sex Magik", "Right on Time", "Wet Sand"],
          songsString: "Blood Sugar Sex Magik | Right on Time | Wet Sand",
          time: "20:00",
          views: 9649,
          audio: 8,
          video: 5      
        },
        {  
          showId: "show345",
          date: "09-07-2016",
          venue: "Otkritie Arena",
          location: "Moscow, Russia",
          user: "testUser5",
          playlistId: "p876",
          videoId: "vid567",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Factory of Faith"],
          songsString: "Factory of Faith",
          time: "4:00",
          views: 79466,
          audio: 5,
          video: 3     
        }]
    }];

    var videos = [{
      id: "123qwe",
      artist: "Radiohead",
      shows: [{
        id: "show123",
        date: "08-07-2016",
        venue: "Passeio Marítimo de Algés",
        location: "Oeiras, Portugal",
        videos: [{
          user: "testUser1",
          playlistId: "p123",
          video: [{
            id: "vid123",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
            songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
            time: "20:00",
            views: 100,
            audio: 5,
            video: 7
          }, {
            id: "vid234",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["Karma Police"],
            songsString: "Karma Police",
            time: "4:00",
            views: 1000,
            audio: 4,
            video: 8
          }, {
            id: "vid345",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
            songs: ["Desert Island Disk", "2 + 2 = 5"],
            songsString: "Desert Island Disk | 2 + 2 = 5",
            time: "10:00",
            views: 10,
            audio: 7,
            video: 2
          }, {
            id: "vid456",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Paranoid Android"],
            songsString: "Paranoid Android",
            time: "7:00",
            views: 1,
            audio: 8,
            video: 8
          }]
        }, {
          user: "testUser2",
          playlistId: "p234",
          video: [{
            id: "vid567",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Burn the Witch"],
            songsString: "Burn the Witch",
            time: "4:00",
            views: 1000000000,
            audio: 10,
            video: 10
          }, {
            id: "vid678",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["Daydreaming"],
            songsString: "Daydreaming",
            time: "4:00",
            views: 10000,
            audio: 3,
            video: 1
          }, {
            id: "vid789",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
            songs: ["Decks Dark"],
            songsString: "Decks Dark",
            time: "4:00",
            views: 1000,
            audio: 1,
            video: 1
          }, {
            id: "vid890",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Desert Island Disk"],
            songsString: "Desert Island Disk",
            time: "4:00",
            views: 10,
            audio: 9,
            video: 4
          }, {
            id: "vid0123",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["My Iron Lung"],
            songsString: "My Iron Lung",
            time: "4:00",
            views: 9,
            audio: 6,
            video: 5
          }, {
            id: "vid0124",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
            songs: ["Talk Show Host"],
            songsString: "Talk Show Host",
            time: "4:00",
            views: 753,
            audio: 7,
            video: 5
          }, {
            id: "vid0125",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Lotus Flower"],
            songsString: "Lotus Flower",
            time: "4:00",
            views: 76357,
            audio: 5,
            video: 7
          }, {
            id: "vid0126",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["The Gloaming"],
            songsString: "The Gloaming",
            time: "4:00",
            views: 657,
            audio: 4,
            video: 5
          }, {
            id: "vid0127",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
            songs: ["Exit Music (for a Film)"],
            songsString: "Exit Music (for a Film)",
            time: "4:00",
            views: 5,
            audio: 2,
            video: 3
          }, {
            id: "vid0128",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["The Numbers"],
            songsString: "The Numbers",
            time: "4:00",
            views: 7653,
            audio: 8,
            video: 7
          }, {
            id: "vid0129",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["Identikit"],
            songsString: "Identikit",
            time: "4:00",
            views: 7637,
            audio: 8,
            video: 8
          }, {
            id: "vid0120",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
            songs: ["Reckoner"],
            songsString: "Reckoner",
            time: "4:00",
            views: 36767,
            audio: 6,
            video: 8
          }, {
            id: "vid01201",
            file: "http://static.videogular.com/assets/videos/videogular.mp4",
            image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
            songs: ["Everything in Its Right Place"],
            songsString: "Everything in Its Right Place",
            time: "4:00",
            views: 367567,
            audio: 6,
            video: 9
          }, {
            id: "vid01211",
            file: "https://vjs.zencdn.net/v/oceans.mp4",
            image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
            songs: ["Idioteque"],
            songsString: "Idioteque",
            time: "4:00",
            views: 9875987,
            audio: 9,
            video: 9
          }]
        }]
    }, {
      id: "show234",
      date: "02-07-2016",
      venue: "Sittertobel",
      location: "St. Gallen, Switzerland",
      videos: [{
        user: "testUser1",
        playlistId: "p345",
        video: [{
          id: "v123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
          time: "20:00",
          views: 0,
          audio: 4,
          video: 8
        }]
      }, {
        user: "testUser4",
        playlistId: "p456",
        video: [{
          id: "vid567",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Burn the Witch"],
          songsString: "Burn the Witch",
          time: "4:00",
          views: 983,
          audio: 1,
          video: 4
        }, {
          id: "vid678",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Daydreaming"],
          songsString: "Daydreaming",
          time: "4:00",
          views: 425,
          audio: 6,
          video: 4
        }, {
          id: "vid789",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Decks Dark"],
          songsString: "Decks Dark",
          time: "4:00",
          views: 3453,
          audio: 8,
          video: 5
        }]
      }]
    }, {
      id: "show345",
      date: "17-06-2016",
      venue: "Laugardalur Park",
      location: "Reykjavik, Iceland",
      videos: [{
        user: "testUser5",
        playlistId: "p567",
        video: [{
          id: "vi123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Everything In Its Right Place", "My Iron Lung", "Creep"],
          songsString: "Everything In Its Right Place | My Iron Lung | Creep",
          time: "20:00",
          views: 364539,
          audio: 8,
          video: 5
        }, {
          id: "vid567",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Burn the Witch"],
          songsString: "Burn the Witch",
          time: "4:00",
          views: 394539,
          audio: 5,
          video: 6
        }]
    }, {
        user: "testUser6",
        playlistId: "p678",
        video: [{
          id: "vid678",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Daydreaming"],
          songsString: "Daydreaming",
          time: "4:00",
          views: 39453,
          audio: 5,
          video: 3
        }, {
          id: "vid789",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Decks Dark"],
          songsString: "Decks Dark",
          time: "4:40",
          views: 76258,
          audio: 3,
          video: 5
        }]
      }]
    }]
  }, {
    id: "234wer",
    artist: "Red Hot Chili Peppers",
    shows: [{
      id: "show456",
      date: "15-07-2016",
      venue: "Le Breton Festival Park",
      location: "Ottawa, Canada",
      videos: [{
        user: "testUser1",
        playlistId: "p789",
        video: [{
          id: "vid123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Intro Jam", "Can't Stop", "Dani California", "Scar Tissue", "Dark Necessities"],
          songsString: "Intro Jam | Can't Stop | Dani California | Scar Tissue | Dark Necessities",
          time: "20:00",
          views: 86,
          audio: 5,
          video: 6
        }, {
          id: "vid234",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["The Adventures of Rain Dance Maggie"],
          songsString: "The Adventures of Rain Dance Maggie",
          time: "4:00",
          views: 648,
          audio: 2,
          video: 2
        }, {
          id: "vid345",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Right on Time", "Tell Me Baby"],
          songsString: "Right on Time | Tell Me Baby",
          time: "10:00",
          views: 648,
          audio: 3,
          video: 3
        }, {
          id: "vid456",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Otherside"],
          songsString: "Otherside",
          time: "7:00",
          views: 90,
          audio: 8,
          video: 7
        }]
      }, {
        user: "testUser2",
        playlistId: "p890",
        video: [{
          id: "vid567",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["The Getaway"],
          songsString: "The Getaway",
          time: "4:00",
          views: 26,
          audio: 5,
          video: 8
        }, {
          id: "vid678",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Go Robot"],
          songsString: "Go Robot",
          time: "4:00",
          views: 685438,
          audio: 9,
          video: 7
        }, {
          id: "vid789",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Californication"],
          songsString: "Californication",
          time: "4:00",
          views: 5685,
          audio: 2,
          video: 9
        }, {
          id: "vid890",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Under the Bridge"],
          songsString: "Under the Bridge",
          time: "4:00",
          views: 23,
          audio: 7,
          video: 7
        }, {
          id: "vid0123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Detroit"],
          songsString: "Detroit",
          time: "4:00",
          views: 756,
          audio: 5,
          video: 7
        }, {
          id: "vid0124",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["By the Way"],
          songsString: "By the Way",
          time: "4:00",
          views: 8389,
          audio: 3,
          video: 7
        }, {
          id: "vid0125",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Soul to Squeeze"],
          songsString: "Soul to Squeeze",
          time: "4:00",
          views: 67,
          audio: 1,
          video: 7
        }, {
          id: "vid0126",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Give It Away"],
          songsString: "Give It Away",
          time: "4:00",
          views: 5,
          audio: 2,
          video: 9
        }]
      }]
    }, {
      id: "show234",
      date: "10-07-2016",
      venue: "Strathallan Castle",
      location: "Perthshire, United Kingdom",
      videos: [{
        user: "testUser1",
        playlistId: "p098",
        video: [{
          id: "v123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Intro Jam", "Can't Stop", "Snow ((Hey Oh))", "Scar Tissue", "Dark Necessities"],
          songsString: "Intro Jam | Can't Stop | Snow ((Hey Oh)) | Scar Tissue | Dark Necessities",
          time: "20:00",
          views: 77,
          audio: 9,
          video: 2
        }]
      }, {
        user: "testUser4",
        playlistId: "p987",
        video: [{
          id: "vid567",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["If You Have to Ask"],
          songsString: "If You Have to Ask",
          time: "4:00",
          views: 53,
          audio: 9,
          video: 1
        }, {
          id: "vid678",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["Nobody Weird Like Me"],
          songsString: "Nobody Weird Like Me",
          time: "4:00",
          views: 9669,
          audio: 1,
          video: 1
        }, {
          id: "vid789",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Otherside"],
          songsString: "Otherside",
          time: "4:00",
          views: 3589,
          audio: 6,
          video: 3
        }]
      }]
    }, {
      id: "show345",
      date: "09-07-2016",
      venue: "Otkritie Arena",
      location: "Moscow, Russia",
      videos: [{
        user: "testUser5",
        playlistId: "p876",
        video: [{
          id: "vi123",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Blood Sugar Sex Magik", "Right on Time", "Wet Sand"],
          songsString: "Blood Sugar Sex Magik | Right on Time | Wet Sand",
          time: "20:00",
          views: 9649,
          audio: 8,
          video: 5
        }, {
          id: "vid567",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
          songs: ["Factory of Faith"],
          songsString: "Factory of Faith",
          time: "4:00",
          views: 79466,
          audio: 5,
          video: 3
        }]
      }, {
        user: "testUser4",
        playlistId: "p765",
        video: [{
          id: "vid678",
          file: "http://static.videogular.com/assets/videos/videogular.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
          songs: ["The Getaway"],
          songsString: "The Getaway",
          time: "4:00",
          views: 98640,
          audio: 4,
          video: 6
        }, {
          id: "vid789",
          file: "https://vjs.zencdn.net/v/oceans.mp4",
          image: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg",
          songs: ["Detroit", "By the Way", "Around the World", "Give It Away"],
          songsString: "Detroit | By the Way | Around the World | Give It Away",
          time: "4:00",
          views: 86748,
          audio: 9,
          video: 8
        }]
      }]
    }]
  }];

  	var ArtistVideos = [
    {
      vid: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg", 
      songs: ["Everything In Its Right Place", "Burn the Witch", "Karma Police", "Airbag", "How To Disappear Completely", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "02-07-2016",
      venue: "Sittertobel",
      location: "St. Gallen, Switzerland"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg", 
      songs: ["Burn the Witch", "Everything In Its Right Place", "How To Disappear Completely", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "17-06-2016",
      venue: "Laugardalur Park",
      location: "Reykjavik, Iceland"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "03-06-2016",
      venue: "Parc del Fòrum",
      location: "Barcelona, Spain"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "01-06-2016",
      venue: "Théâtre Antique de Fourvière",
      location: "Lyon, France"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "28-05-2016",
      venue: "Roundhouse",
      location: "London, United Kingdom"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "27-05-2016",
      venue: "Roundhouse",
      location: "London, United Kingdom"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "26-05-2016",
      venue: "Roundhouse",
      location: "London, United Kingdom"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "24-05-2016",
      venue: "Le Zénith",
      location: "Paris, France"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "23-05-2016",
      venue: "Le Zénith",
      location: "Paris, France"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "21-05-2016",
      venue: "Heineken Music Hall",
      location: "Amsterdam, Netherlands"
    },
    {
      vid: "https://cdn.pixabay.com/photo/2016/11/29/07/36/audience-1868137_960_720.jpg", 
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      time: "5:00",
      date: "20-05-2016",
      venue: "Heineken Music Hall",
      location: "Amsterdam, Netherlands"
    }];

    var topVideos = [{
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser1",
      playlistId: "p123",
      videoId: "vid123",
      file: "http://static.videogular.com/assets/videos/videogular.mp4",
      image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
      time: "20:00",
      views: 100,
      audio: 5,
      video: 7
    },
    {
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser1",
      playlistId: "p123",
      videoId: "vid234",
      file: "https://vjs.zencdn.net/v/oceans.mp4",
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/50/audience-1845231_960_720.jpg",
      songs: ["Karma Police"],
      songsString: "Karma Police",
      time: "4:00",
      views: 1000,
      audio: 4,
      video: 8
    },
    {
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser2",
      playlistId: "p234",
      videoId: "vid567",
      file: "http://static.videogular.com/assets/videos/videogular.mp4",
      image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
      songs: ["Burn the Witch"],
      songsString: "Burn the Witch",
      time: "4:00",
      views: 1000000000,
      audio: 10,
      video: 10
    },
    {
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser1",
      playlistId: "p123",
      videoId: "vid123",
      file: "http://static.videogular.com/assets/videos/videogular.mp4",
      image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
      time: "20:00",
      views: 100,
      audio: 5,
      video: 7
    },
    {
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser1",
      playlistId: "p123",
      videoId: "vid123",
      file: "http://static.videogular.com/assets/videos/videogular.mp4",
      image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
      time: "20:00",
      views: 100,
      audio: 5,
      video: 7
    },
    {
      showId: "show123",
      date: "08-07-2016",
      venue: "Passeio Marítimo de Algés",
      location: "Oeiras, Portugal",
      user: "testUser1",
      playlistId: "p123",
      videoId: "vid123",
      file: "http://static.videogular.com/assets/videos/videogular.mp4",
      image: "https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
      songs: ["Everything In Its Right Place", "How To Disappear Completely", "Burn the Witch", "My Iron Lung", "Creep"],
      songsString: "Everything In Its Right Place | How To Disappear Completely | Burn the Witch | My Iron Lung | Creep",
      time: "20:00",
      views: 100,
      audio: 5,
      video: 7
    }];

    return{
      getSlickResponsive : function(){
        return slickResponsive;
      },
      getVideos : function(){
        return videos;
      },
      getShows : function(artistName){
        for(var i = 0; i < videos.length; i++){
          if(videos[i].artist === artistName){
            return videos[i].shows;
          }
        }
      },
      getFavourites : function(){
        return favourites;
      },
      getTopVideos : function(){
        return topVideos;
      },
      getShowDetails : function(showId, artistName){
        var showDetails = [];
        for(var i = 0; i < videos.length; i++){
          if(videos[i].artist === artistName){
            for(var j = 0; j < videos[i].shows.length; j++){
              if(videos[i].shows[j].id === showId){
                showDetails.push({
                  date: videos[i].shows[j]["date"],
                  venue: videos[i].shows[j]["venue"],
                  location: videos[i].shows[j]["location"],
                  videos: videos[i].shows[j]["videos"]});
                return showDetails;
              }
            }
          }
        }
      },
      getPlaylistDetails : function(showId, playlistId, artistName){
        var playlistDetails = [];
        for(var i = 0; i < videos.length; i++){
          if(videos[i].artist === artistName){
            for(var j = 0; j < videos[i].shows.length; j++){
              if(videos[i].shows[j].id === showId){
                for(var k = 0; k < videos[i].shows[j].videos.length; k++){
                  if(videos[i].shows[j].videos[k].playlistId === playlistId){
                    for(var l = 0; l < videos[i].shows[j].videos[k].video.length; l++){
                      playlistDetails.push({
                        id: videos[i].shows[j].videos[k].video[l]["id"],
                        file: videos[i].shows[j].videos[k].video[l]["file"],
                        image: videos[i].shows[j].videos[k].video[l]["image"],
                        audio: videos[i].shows[j].videos[k].video[l]["audio"],
                        video: videos[i].shows[j].videos[k].video[l]["video"],
                        views: videos[i].shows[j].videos[k].video[l]["views"],
                        songs: videos[i].shows[j].videos[k].video[l]["songs"], 
                        songsString: videos[i].shows[j].videos[k].video[l]["songsString"],
                        time: videos[i].shows[j].videos[k].video[l]["time"]})
                    }
                    return playlistDetails;
                  }
                }
              }
            }
          }
        }
      },      
      getVideoDetails : function(showId, playlistId, videoId, artistName){
        var videoDetails = [];
        for(var i = 0; i < videos.length; i++){
          if(videos[i].artist === artistName){
            for(var j = 0; j < videos[i].shows.length; j++){
              if(videos[i].shows[j].id === showId){
                for(var k = 0; k < videos[i].shows[j].videos.length; k++){
                  if(videos[i].shows[j].videos[k].playlistId === playlistId){
                    for(var l = 0; l < videos[i].shows[j].videos[k].video.length; l++){
                      if(videos[i].shows[j].videos[k].video[l].id === videoId){                        
                        videoDetails.push({
                          audio: videos[i].shows[j].videos[k].video[l]["audio"], 
                          video: videos[i].shows[j].videos[k].video[l]["video"],
                          views: videos[i].shows[j].videos[k].video[l]["views"], 
                          songsString: videos[i].shows[j].videos[k].video[l]["songsString"],
                          time: videos[i].shows[j].videos[k].video[l]["time"],
                          file: videos[i].shows[j].videos[k].video[l]["file"]});
                        return videoDetails;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },  
      getUserVideos : function(user){
        var userVideos = [];
        for(var i = 0; i < videos.length; i++){
          for(var j = 0; j < videos[i].shows.length; j++){
            for(var k = 0; k < videos[i].shows[j].videos.length; k++){
              if(videos[i].shows[j].videos[k].user === user){

                var show = {date: videos[i].shows[j]["date"], 
                venue: videos[i].shows[j]["venue"],
                location: videos[i].shows[j]["location"],
                id: videos[i].shows[j]["id"],
                playlistId: videos[i].shows[j].videos[k]["playlistId"],
                videos: videos[i].shows[j].videos[k]["video"]};

                if(userVideos.length > 0){
                  var added = false;
                  for(var l = 0; l < userVideos.length; l++){
                    if(userVideos[l]["artistId"] === videos[i]["id"]){
                      userVideos[l].shows.push({show: show});
                      added = true;
                    }
                  }
                  if(!added){
                    userVideos.push({artistId: videos[i]["id"], 
                      artistName: videos[i]["artist"],
                      shows: [{show: show}]}); 
                  }
                }
                else{
                  userVideos.push({artistId: videos[i]["id"], 
                    artistName: videos[i]["artist"],
                    shows: [{show: show}]});     
         
                }
              }
            }
          }
        }
        return userVideos;
      },                       
      getArtistVideos : function(){
        return ArtistVideos;
      },
    	getArtistVideosLabel : function(val, key){
    		return ArtistVideos.find(function(browse){
    			return browse[key] === val;
    		}).label;
    	},
    	getArtistVideosName : function(val, key){
    		return ArtistVideos.find(function(browse){
    			return browse[key] === val;
    		}).name;
    	},
    	getArtistVideosSearch : function(val, key){
    		return ArtistVideos.find(function(browse){
    			return browse[key] === val;
    		}).search;
    	}
    }
	}


})();