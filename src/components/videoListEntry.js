angular.module('video-player')
.component('videoListEntry', {

  bindings: {
    video: '<',
    setCurrVideo: '&'
  },

  controller: function() {
    // var entryCtrl = this;

    // entryCtrl.$onInit = function() {
    //   console.log('on init');
    //   console.log(entryCtrl);
    // };
    // this.testVideo = ;
    // debugger;
    // var ctrl = this;
    // var ctrl = this;
    // ctrl.test = 'string';
    // this.onVideoEntryClick = function(passedVideoObject) {
    //   // console.log(this);
    //   debugger;
    //   this.setVideoEntry(passedVideoObject);
    // };

    // console.log(this.testVideo);
    // this.testVideo = testVideo;
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
