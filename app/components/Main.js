import React from 'react';
import NavBar from './NavBar';

var Main = React.createClass({
  render: function() {
    return (
      <div style={{backgroundColor:'clear', height:'100%'}}>
        <NavBar/>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Main