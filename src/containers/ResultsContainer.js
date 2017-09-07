import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearSearch } from '../actions'
import ClearSearchButton from '../components/ClearSearchButton'
import ResultsList from '../components/ResultsList'
import '../styles/ResultsContainer.css'

class ResultsContainer extends Component {

  handleClick() {
    this.props.dispatch(clearSearch())
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

  if (state.searchInput === '') {
    state.filters.options.forEach((filter) => {
      if (filter.isChecked) {
        state.demos.forEach((demo) => {
          demo.cards.forEach((card) => {
            if (card.type.toLowerCase() === filter.label.toLowerCase()) {
              results.push(card)
            }
          })
        })
      }
    })
  }

  return ({
    results: results
  })
}

export default connect(mapStateToProps)(ResultsContainer)
