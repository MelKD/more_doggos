import React, { Component } from 'react';
import './components/Layout.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Breeds from './pages/Breeds';
import Gallery from './pages/Gallery';
import Home from './pages/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Table of Breeds"
    };
  }

  changeBreed(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/breeds" component={Breeds} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </Router>
  }

}

export default App;
