import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
// import Lightbox from 'react-image-lightbox';
import '../styles/Layout.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

class HomeGrid extends Component {
  constructor(props) {
    super();
    this.state = {
      hasErrors: false,
      dogs: null,
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }
    
  loadData() {
    fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(res => res.json())
      .then(res => this.setState({dogs: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }
  
  loadImages() {
    return this.state.dogs.message.map((dog, index) => <div key={index} className="crop-img"><img alt="Dog" className="" src={dog} onClick={() => this.setState({ isOpen: true })}/></div>);
  }
    
  render() {
    const { photoIndex, isOpen } = this.state;
    if(!this.state.dogs){
      return <div/>
    }
    else {
      return (
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {this.loadImages()}
      </Masonry>
      );
    }
  }
}

export default HomeGrid;
