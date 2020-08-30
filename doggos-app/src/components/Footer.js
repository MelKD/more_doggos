import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/Layout.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="container">
          <div className="col-md-6">
            <p><a href="https://github.com/MelKD/more_doggos" target="_blank">GitHub</a></p>
            <p><a href="https://twitter.com/melissa_k__d" target="_blank">Twitter</a></p>
            <p><a href="https://www.linkedin.com/in/melissakyd/" target="_blank">LinkedIn</a></p>
          </div>
          <div className="col-md-6">
            <img src={logo} className="Footer-logo" alt="logo" />
            <p className="footer-react">Powered by React</p>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
