import React, { Component } from 'react';
import '../styles/Layout.css';
import GalleryGrid from '../components/GalleryGrid';
import SelectBreed from '../components/SelectBreed';

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <SelectBreed />
        <GalleryGrid />
      </div>
    );
  }
}

export default Gallery;
