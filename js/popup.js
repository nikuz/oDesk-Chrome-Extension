'use strict';

import * as $ from 'jquery';
import * as React from 'react';
import * as odesk from 'modules/odesk';

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  $('#content')[0]
);