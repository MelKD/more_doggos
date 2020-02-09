import React, { Component } from 'react';
import '../styles/Layout.css';

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
      suggestions = this.state.breeds.sort().filter(v => regex.test(v));      
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
    return this.state.dogs.message.map((dog, index)=> <div className="crop-img col-md-4" key={index} ><img alt="Dog" className="" src={dog} /><p>{dog}</p></div>);
  }
  
  // TODO:
  // Get a blurb from Wikipedia about the dog type by selection (if one available)
  // Reset button to clear selection so can search for and display a different breed
  // Scroll to search on page
  // Option to view full images etc
  // Tidy up styling (styled components?? ) to finish off
  
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
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text"/>
            <button onClick={() => this.handleButtonClick()}>Show breed!</button>
            {this.renderSuggestions()}
        </div>
      )
    }
    else {
      return(
        <div className="container">
          <a name="searchByBreed" />
          <input 
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text"/>
          <button onClick={() => this.handleButtonClick()}>Show breed!</button>
            {this.renderSuggestions()}
          <div className="container Breed">
            <h3>{this.state.value}</h3>
              {this.loadImages()}
          </div>
        </div>
      )
    }
  }
}

export default SelectBreed;