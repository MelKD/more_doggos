import React, { Component } from 'react';
import './Layout.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbarResponsive">
          <div className="container">
            <a className="navbar-brand" href="/">More Doggos, Please!</a>
            <img src="dog-icon.png" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/breeds">Breeds</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">Gallery</a>
                </li>            
              </ul>
            </div>
          </div>
        </nav>
      </header>
      );
    }
}

export default Header;