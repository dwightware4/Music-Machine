/* global React, Track, KeyStore*/
(function(root) {
  'use strict';

  root.Recorder = React.createClass({
    getInitialState: function() {
      return {isRecording: false, track: new Track("New")};
    },

    _storeChange: function () {
      var pressedKeys = [];
      var keys = KeyStore.all();
      for (var key in keys) {
        if (keys[key]) { pressedKeys.push(key); }
      }
      this.state.track.addNotes(pressedKeys);
    },

    componentDidMount: function () {
      KeyStore.addChangeHandler(this._storeChange);
    },

    removeChangeHandler: function () {
      this.state.track.stopRecording();
      KeyStore.removeChangeHandler(this._storeChange);
    },

    render: function(){
      var track = this.state.track;
      return(
        <div>
          <p>Click here to playback your recording.</p>
          <button onClick={track.play.bind(track)}>Play</button>
          <br/>
          <p>Click here to start recording.</p>
          <button onClick={track.startRecording.bind(track)}>Start</button>
          <br/>
          <p>Click here to stop recording.</p>
          <button onClick={this.removeChangeHandler}>Stop</button>
        </div>
      );
    }
  });
})(this);
