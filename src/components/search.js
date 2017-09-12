angular.module('video-player')
  .component('search', {

    bindings: {
      searchYoutube: '&',
      updateVideos: '&'
    },

    controller: function() {
    },
  
    templateUrl: 'src/templates/search.html'
  });
