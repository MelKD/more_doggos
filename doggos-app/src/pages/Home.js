import React, { Component } from 'react';
import '../components/Layout.css';
import HomeGrid from '../components/HomeGrid';
import HomeTable from '../components/HomeTable';
import {Link} from "react-router-dom";

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
      <div>
        <HomeGrid />
        <HomeTable changeBreed={this.changeBreed.bind(this)} title={this.state.title} />  
      </div>
    );
  }
}

export default Home;
