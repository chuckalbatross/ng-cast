angular.module('video-player')
  .service('youTube', function($http) {

    this.searchYouTube = function(searchQuery) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          q: searchQuery,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video',
          maxResults: 5 
        }
      });
    };

  });

// angular.module('video-player')
//   .service('youTube', function($http) {

//     this.searchYouTube = function(searchQuery) {
//       return $http({
//         method: 'GET',
//         url: 'https://www.googleapis.com/youtube/v3/search',
//         params: {
//           part: 'snippet',
//           q: searchQuery,
//           key: window.YOUTUBE_API_KEY,
//           videoEmbeddable: true,
//           type: 'video',
//           maxResults: 5 
//         }
//       }).then(function successCallback(response) {
//         console.log('Success');
//         debugger;
//       }, function errorCallback(response) {
//         console.log('Failure');
//         debugger;
//       });
//     };

//   });

