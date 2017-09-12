angular.module('video-player')
  .component('videoListEntry', {

    bindings: {
      video: '<',
      setCurrVideo: '&'
    },

    controller: function() {
    },

    templateUrl: 'src/templates/videoListEntry.html'
  });
