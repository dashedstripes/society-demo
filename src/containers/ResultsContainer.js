import React, { Component } from 'react'
import ClearSearchButton from '../components/ClearSearchButton'
import ResultsList from '../components/ResultsList'

class ResultsContainer extends Component {
  render() {
    return (
      <div>
        <h2>Results</h2>
        <ClearSearchButton />
        <ResultsList />
      </div>
    )
  }
}

export default ResultsContainer
