/* global React, KeyStore */
(function(root) {
  'use strict';

  root.Key = React.createClass({
    getInitialState: function() {
      return {note: null};
    },

    _storeChange: function() {
      var activeKeys = KeyStore.all();
      if(activeKeys[this.props.noteName]) {
        this.state.note.start();
      } else {
        this.state.note.stop();
      }
    },

    componentDidMount: function() {
      var newNote = new root.Note(root.TONES[this.props.noteName]);
      this.setState({ note: newNote });
      KeyStore.addChangeHandler(this._storeChange);
    },

    render: function () {
      return (<div></div>);
    }
  });

})(this);
