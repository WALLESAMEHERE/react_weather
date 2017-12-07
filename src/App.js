import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Weather from './components/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-6 is-offset-3 box">
            <Header />
            <Weather />
            <Footer />
        </div>
      </div>
    );
  }
}

export default App;

