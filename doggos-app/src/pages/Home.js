import React, { Component } from 'react';
import '../styles/Layout.css';
import HomeGrid from '../components/HomeGrid';
import SelectBreed from '../components/SelectBreed';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Table of Breeds"
    };
  }

  changeBreed(title) {
    this.setState({title});
  }

  render() {
    return (
      <div className="container">
        <h3>Just for fun!</h3>
        <p>Because let's face it, dogs are the best!</p>
        <HomeGrid />
        <div className="col-12 divider"></div>
        <p>Looking for a specific breed? Search here!</p>
        <SelectBreed />
      </div>
    );
  }
}

export default Home;
