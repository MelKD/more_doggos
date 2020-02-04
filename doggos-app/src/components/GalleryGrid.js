import React, { Component } from 'react';
import '../styles/Layout.css';

class GalleryGrid extends Component {
  constructor(props) {
    super();
    this.state = {
      hasErrors: false,
      dogs: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }
    
  loadData() {
    fetch("https://dog.ceo/api/breeds/image/random/18")
      .then(res => res.json())
      .then(res => this.setState({dogs: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }
  
  loadImages() {
    return this.state.dogs.message.map((dog, index)=> <div className="crop-img col-md-4" key={index} ><img alt="Dog" className="" src={dog} /></div>);
  }
    
  render() {
    if(!this.state.dogs){
      return <div/>
    }
    else {
      console.log("dogs ", this.state.dogs.message);
      console.log("props", this.props);
      return (
        <div className="GalleryGrid">
          <div className="container">
          <h3>{this.props.breed}</h3>
            <div>
              {this.loadImages()}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default GalleryGrid;
