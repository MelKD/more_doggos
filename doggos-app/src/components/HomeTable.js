import React, { Component } from 'react';
import './Layout.css';

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
          <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default HomeTable;
