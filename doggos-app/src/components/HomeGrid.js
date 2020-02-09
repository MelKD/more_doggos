import React, { Component } from 'react';
import '../styles/Layout.css';

class HomeGrid extends Component {
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
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then(res => res.json())
      .then(res => this.setState({dogs: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }
  
  loadImages() {
    return this.state.dogs.message.map((dog, index) => <div key={index} className="crop-img col-md-4"><img alt="Dog" className="" src={dog} /></div>);
  }
    
  render() {
    if(!this.state.dogs){
      return <div/>
    }
    else {
      return (
        <div className="HomeGrid">
          <div className="container">
            <div>
              {this.loadImages()}              
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HomeGrid;
