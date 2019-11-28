import React, { Component } from 'react';
import '../styles/Layout.css';

class HomeTable extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeBreed(title);
  }

  render() {
    return (
      <div className="HomeTable">
        <div className="container">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default HomeTable;
