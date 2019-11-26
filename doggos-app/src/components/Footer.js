import React, { Component } from 'react';
import logo from '../logo.svg';
import './Layout.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container">
          <div className="col-md-6">
            <p>GitHub</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
          <div className="col-md-6">
            <img src={logo} className="Footer-logo" alt="logo" />
            <p>Powered by React</p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
