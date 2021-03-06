import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../styles/Layout.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbarResponsive">
          <div className="container">
            <img className="head-dog" alt="Dog Icon" src="boston-terrier.png" />
            <a className="navbar-brand" href="/">More Doggos, Please!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link 
                  className="nav-link" 
                  to="searchByBreed" 
                  smooth={true}
                  offset={-70}
                  duration={500}>Find a Breed</Link>
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
