/*global React, Key, Organ*/
(function(root) {
  'use strict';
  root.Organ = React.createClass({
    render: function() {
      return (
        <div>
          {
            Object.keys(root.TONES).map(function (tone) {
              return <Key key={ parseInt(tone)} noteName={ parseInt(tone) }/>;
            })
          }
        </div>
      );
    }
  });
})(this);
