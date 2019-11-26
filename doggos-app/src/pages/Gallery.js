import React, { Component } from 'react';
import '../components/Layout.css';
import GalleryGrid from '../components/GalleryGrid';

class Gallery extends Component {
  render() {
    return (
      <div>
        <GalleryGrid />
      </div>
    );
  }
}

export default Gallery;
