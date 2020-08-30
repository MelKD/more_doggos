import React, { Component } from 'react';
import Masonry from 'react-masonry-css';
import '../styles/Layout.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

// const initialState = {
//   suggestions: [],
//   images: [],
//   hasErrors: false,
//   breeds: null,
//   dogs: null,
//   value: '',
// };

class SelectBreed extends Component {
  constructor(props) {
    super();
    this.state = {
      suggestions: [],
      images: [],
      hasErrors: false,
      breeds: null,
      dogs: null,
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list");
      const json = await response.json();
      this.setState({breeds:json.message});
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      let allBreeds = [];
      allBreeds = this.state.breeds;
      suggestions = allBreeds.sort().filter(v => regex.test(v));      
    }  
    this.setState(() => ({suggestions}));    
  }

  suggestionSelection (value) {
    this.setState(() => ({
      value: value,
      suggestions: [],
    }));
  }

  handleButtonClick () {
    this.loadDogs();
  }

  resetButtonClick () {
    this.setState(() => ({
      suggestions: [],
      images: [],
      hasErrors: false,
      dogs: null,
      value: '',
    }));
  }

  async loadDogs() {
    var type = this.state.value;
    var breed = type.toLowerCase();
    try {
      const response = await fetch("https://dog.ceo/api/breed/" + breed + "/images/random/18");
      const json = await response.json();
      this.setState({dogs:json});
    } catch (error) {
      console.log(error);
    }
  }
  
  loadImages() {
    return this.state.dogs.message.map((dog, index)=> <div className="crop-img" key={index} ><img alt="Dog" className="" src={dog} /></div>);
  }
  
  // TODO:
  // Get a blurb from Wikipedia about the dog type by selection (if one available)
  // Scroll to search on page
  // Option to view full images etc
  
  renderSuggestions () {
    const { suggestions } = this.state;
    if(suggestions.length === 0) {
      return null;
    } else {
      return (
        <div>
          <ul className="dogList">
            {suggestions.map((breed, index) => <li key={index} onClick={() => this.suggestionSelection(breed) }>{breed}</li>)}
          </ul>
        </div>
      )
    }
  }

  render() {
    if(!this.state.dogs){
      return(
        <div className="container">
          <input 
            placeholder ={this.state.value}
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text"/>
          <button className="turquoise" onClick={() => this.handleButtonClick()}>Show breed!</button>
          <button onClick={() => this.resetButtonClick()}>Clear</button>
          {this.renderSuggestions()}     
        </div>
      )
    }
    else {
      return(
        <div className="container">
          <a name="searchByBreed" />
          <input 
            placeholder ={this.state.value}
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text"/>
          <button className="turquoise" onClick={() => this.handleButtonClick()}>Show breed!</button>
          <button onClick={() => this.resetButtonClick()}>Clear</button>
            {this.renderSuggestions()}
          <div className="container Breed">
            <h3 className="breed-type">{this.state.value}</h3>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {this.loadImages()}
            </Masonry>
          </div>
        </div>
      )
    }
  }
}

export default SelectBreed;