import React from 'react';

var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-inverse" style={{margin:0, zIndex:10}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" href="#">Dr. Jason Xue</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Patient Resources</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

export default NavBar