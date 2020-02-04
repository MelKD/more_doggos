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
    fetch("https://dog.ceo/api/breeds/image/random/9")
      .then(res => res.json())
      .then(res => this.setState({dogs: res}))
      .catch(() => this.setState({ hasErrors: true }))
  }
  
  loadImages() {
    return this.state.dogs.message.map(dog=> <div className="crop-img col-md-4"><img alt="Dog" className="" src={dog} /></div>);
  }
    
  render() {
    if(!this.state.dogs){
      return <div/>
    }
    else {
      console.log("dogs ", this.state.dogs.message);
      return (
        <div className="HomeGrid">
          <div className="container">
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

export default HomeGrid;
