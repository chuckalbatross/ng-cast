angular.module('video-player')

.component('app', {

  // bindings: {
    // testVideos: '<'
  // },

  controller: function() {
    this.videos = window.exampleVideoData;
  },

  templateUrl: 'src/templates/app.html'
});
