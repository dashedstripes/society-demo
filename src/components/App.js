import React, { Component } from 'react'
import Header from './Header'
import FormContainer from '../containers/FormContainer'
import DemosContainer from '../containers/DemosContainer'
import RegionsContainer from '../containers/RegionsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FormContainer />
        <DemosContainer />
        <RegionsContainer />
      </div>
    );
  }
}

export default App
