import React from 'react';

var Main = React.createClass({
  render: function() {
    return (
      <div>
        Hello World
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Main