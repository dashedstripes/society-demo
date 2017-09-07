import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFilters } from '../actions'
import FiltersButton from '../components/FiltersButton'
import FiltersList from '../components/FiltersList'

class FiltersContainer extends Component {
  handleChange(isOpen) {
    this.props.dispatch(toggleFilters(isOpen))
  }
  render() {
    if (this.props.filters.isOpen) {
      return (
        <div>
          <FiltersButton handleChange={this.handleChange.bind(this, false)} />
          <FiltersList />
        </div>
      )
    } else {
      return (
        <FiltersButton handleChange={this.handleChange.bind(this, true)} />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(FiltersContainer)
