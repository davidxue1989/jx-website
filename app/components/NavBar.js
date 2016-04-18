import React from 'react';
import {Link} from 'react-router';

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
            <Link className="navbar-brand" to="/">Dr. Jason Xue</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/About">About</Link></li>
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