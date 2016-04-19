import React from 'react';
import {Link} from 'react-router';

var NavBar = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      currentPage: '',
    };
  },
  onNavBarClick: function(pathname) {
    this.context.router.push({pathname: pathname});
    this.setState({currentPage:pathname});
    if (this.refs.navbarButtons.className.indexOf('collapse in')>-1) {
      this.refs.collapseButton.click();
    }
  },
  render: function() {
    return (
      <nav className="navbar navbar-inverse" style={{margin:0, zIndex:10}}>
        <div className="container-fluid">
          <div className="navbar-header" style={{paddingRight:30}}>
            <button ref='collapseButton' type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span> 
            </button>
            <a className="navbar-brand" style={{color:'white', backgroundColor:'#434343', cursor:'pointer'}} onClick={this.onNavBarClick.bind(this, '')}>Dr. Jason Xue</a>
          </div>
          <div ref='navbarButtons' className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className={this.state.currentPage=='About'?'active':''}><a onClick={this.onNavBarClick.bind(this, 'About')} style={{cursor:'pointer'}}>About</a></li>
              <li className={this.state.currentPage=='Contact'?'active':''}><a onClick={this.onNavBarClick.bind(this, 'Contact')} style={{cursor:'pointer'}}>Contact</a></li>
              <li className={this.state.currentPage=='PatientResources'?'active':''}><a onClick={this.onNavBarClick.bind(this, 'PatientResources')} style={{cursor:'pointer'}}>Patient Resources</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

export default NavBar