import React, { Component } from 'react';
import './styles/Layout.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
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
                {/* <Route exact path="/" component={Home} /> */}
                <Home/>
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
