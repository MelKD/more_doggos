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
    return this.state.dogs.message.map(dog=> <div className="crop-img col-md-4"><img className="" src={dog} /></div>);
  }

  // To Do:
  // Set autosuggest to select a breed to view images
  // Need to fetch breed list to auto suggest and select
  // from possible options to render images of a single 
  // breed only
    
  render() {
    if(!this.state.dogs){
      return <div/>
    }
    else {
      console.log("dogs ", this.state.dogs.message);
      return (
        <div className="GalleryGrid">
          <div className="container">
            <h3>Gallery</h3>
            <div>
              {this.loadImages()}
              {console.log("reached 41")}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default GalleryGrid;
