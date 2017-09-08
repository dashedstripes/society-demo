import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearSearch, setIsActive, resetFilters, toggleFilters } from '../actions'
import ClearSearchButton from '../components/ClearSearchButton'
import ResultsList from '../components/ResultsList'
import '../styles/ResultsContainer.css'

class ResultsContainer extends Component {

  handleClick() {
    this.props.dispatch(clearSearch())
    this.props.dispatch(resetFilters())
    this.props.dispatch(toggleFilters(false))
    this.props.dispatch(setIsActive(false))
  }

  render() {
    return (
      <div className="ResultsContainer">
        <h2 className="ResultsContainerTitle">Results</h2>
        <ClearSearchButton handleClick={this.handleClick.bind(this)} />
        <ResultsList results={this.props.results} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let results = []



  return ({
    results: results
  })
}

export default connect(mapStateToProps)(ResultsContainer)
