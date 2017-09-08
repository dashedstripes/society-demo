import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import FormContainer from '../containers/FormContainer'
import DemosContainer from '../containers/DemosContainer'
import RegionsContainer from '../containers/RegionsContainer'
import ResultsContainer from '../containers/ResultsContainer'
import '../styles/App.css'

class App extends Component {
  render() {
    if (!this.props.filters.isActive) {
      return (
        <div className="app">
          <Header />
          <div className="container">
            <FormContainer />
            <DemosContainer />
            <RegionsContainer />
          </div>
        </div>
      )
    } else {
      return (
        <div className="app">
          <Header />
          <div className="container">
            <FormContainer />
            <ResultsContainer />
          </div>
        </div>
      )
    }

  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(App)
