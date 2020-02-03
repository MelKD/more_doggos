import React, { Component } from 'react';
import '../styles/Layout.css';

class SelectBreed extends Component {
  constructor(props) {
    super();
    this.state = {
      hasErrors: false,
      breeds: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }
    
  loadData() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(res => this.setState({breeds: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }

  loadBreeds() {
    // return this.state.breeds.message.map(breed=> <li><div>{breed}</div></li>);
  }
    
  render() {
    if(!this.state.breeds){
      return <div/>
    }
    else {
      console.log("breeds ", this.state.breeds.message);
      return(
        <div className="container">
          <ul className="dogList">
            {this.loadBreeds()}
            {console.log("reached 38")}
          </ul>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      );
    }
  }
}

export default SelectBreed;