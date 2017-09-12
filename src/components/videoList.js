angular.module('video-player')
  .component('videoList', {

    bindings: {
      videos: '<',
      setCurrVideo: '&'
    },

    controller: function() {
    // var videoListCtrl = this;
    // this.testVideos = window.exampleVideoData;
    // debugger;
    // this.onClick = function() {
    //   console.log(this.video);
    // };


    // var ctrl = this;
    // ctrl.setVideoList = function(passedVideo) {
    //   console.log('setVideoList Called');
    //   debugger;
    //   ctrl.setVideo(passedVideo);
    // };


    // ctrl.setVideo = function () {
    //   console.log('setVideo videoList called');
    // };
    },

    templateUrl: 'src/templates/videoList.html'

  });


