import React, { Component } from 'react'
import Header from './Header'
import FormContainer from '../containers/FormContainer'
import DemosContainer from '../containers/DemosContainer'
import RegionsContainer from '../containers/RegionsContainer'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <FormContainer />
          <DemosContainer />
          <RegionsContainer />
        </div>
      </div>
    );
  }
}

export default App
