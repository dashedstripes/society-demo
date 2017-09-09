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

  let input = state.filters.searchInput.toLowerCase()
  let activeFilters = state.filters.options.filter((filter) => filter.isChecked)
  let cards = state.demos.map((demo) => demo.cards.map((card) => card)).reduce((acc, cur) => acc.concat(cur), [])

  if (input !== '') {

    activeFilters.forEach((filter) => {
      cards.forEach((card) => {
        if (card.name.toLowerCase().indexOf(input) !== -1
          && card.type === filter.label) {
          results.push(card)
        }
      })
    })

    if (activeFilters.length > 0) {
      return ({
        results
      })
    } else {
      cards.forEach((card) => {
        if (card.name.toLowerCase().indexOf(input) !== -1) {
          results.push(card)
        }
      })
      return ({
        results
      })
    }

  } else {
    activeFilters.forEach((filter) => {
      cards.forEach((card) => {
        if (card.type === filter.label) {
          results.push(card)
        }
      })
    })
    return ({
      results
    })
  }

}

export default connect(mapStateToProps)(ResultsContainer)
