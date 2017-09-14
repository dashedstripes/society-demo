import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import LoginConfirm from '../containers/LoginConfirm'
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
            <LoginConfirm />
            <FormContainer />
            <DemosContainer />
            {this.props.demos.length > 1 ? <RegionsContainer /> : null}
          </div>
        </div>
      )
    } else {
      return (
        <div className="app">
          <Header />
          <div className="container">
            <LoginConfirm />
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
