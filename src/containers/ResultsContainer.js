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

  if (state.filters.searchInput !== '') {
    let numOfActiveFilters = 0
    state.filters.options.forEach((option) => {
      if (option.isChecked) {
        numOfActiveFilters += 1
        state.demos.forEach((demo) => {
          demo.cards.forEach((card) => {
            if (card.name.toLowerCase().indexOf(state.filters.searchInput.toLowerCase()) !== -1 && card.type === option.label) {
              results.push(card)
            }
          })
        })
      }
    })

    if (numOfActiveFilters > 0) {
      return ({
        results: results
      })
    } else {
      state.demos.forEach((demo) => {
        demo.cards.forEach((card) => {
          if (card.name.toLowerCase().indexOf(state.filters.searchInput.toLowerCase()) !== -1) {
            results.push(card)
          }
        })
      })
      return ({
        results: results
      })
    }
  } else {
    state.filters.options.forEach((option) => {
      if (option.isChecked) {
        state.demos.forEach((demo) => {
          demo.cards.forEach((card) => {
            if (card.type === option.label) {
              results.push(card)
            }
          })
        })
      }
    })

    return ({
      results: results
    })

  }
}

export default connect(mapStateToProps)(ResultsContainer)
