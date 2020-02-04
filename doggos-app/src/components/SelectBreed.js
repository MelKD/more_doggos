import React, { Component } from 'react';
import '../styles/Layout.css';

class SelectBreed extends Component {
  constructor(props) {
    super();
    this.breeds = [
      'Airedale', 
      'Affenpinsher', 
      'Maltese', 
      'Bulldog'];
    this.state = {
      suggestions: [],
      hasErrors: false,
      // breeds: null,
      value: '',
    };
    // this.loadBreeds = this.loadBreeds.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
    
  loadData() {
    fetch("https://dog.ceo/api/breeds/list")
      .then(res => res.json())
      .then(res => this.setState({breeds: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }

  // loadBreeds() {
  //   return this.state.breeds.message.map(breed=> <li>{breed}</li>);
  // }

  handleChange = (event) => {
    const value = event.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.breeds.sort().filter(v => regex.test(v));      
    }  
    this.setState(() => ({suggestions}));
  }

  suggestionSelection (value) {
    console.log("value", value);
    this.setState(() => ({
      value: value,
      suggestions: [],
    }));
  }
    
    // TODO:
    // Populate Breed array with values returned from Fetch
    // Display gallery images based selection made in text box
    // Get a blurb from Wikipedia about the dog type by selection (if one available)
    
  renderSuggestions () {
    const { suggestions } = this.state;
    if(suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul className="dogList">
          {suggestions.map((breed) => <li onClick={() => this.suggestionSelection(breed)}>{breed}</li>)}
        </ul>
      )
    }
  }
    
  render() {
    if(!this.state.breeds){
      return <div/>
    }
    else {
      return(
        <div className="container">
          <input 
            value={this.state.value} 
            onChange={this.handleChange} 
            type="text"/>
            {this.renderSuggestions()}
        </div>
      );
    }
  }
}

export default SelectBreed;