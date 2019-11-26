import React, { Component } from 'react';
import './components/Layout.css';
import Breeds from './pages/Breeds';
import { BrowserRouter as Router, Route, Switch, NavLink, HashRouter } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
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
        <HashRouter>
          <Header />
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/breeds" component={Breeds} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </Router>
            {this.props.children}
          </main>
        </HashRouter>
        <Footer />
      </div>
    );
  }

}

export default App;
