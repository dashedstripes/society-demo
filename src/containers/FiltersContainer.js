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
        <div className="row">
          <div className="col-md-12">
            <FiltersButton handleChange={this.handleChange.bind(this, false)} />
            <FiltersList />
          </div>
        </div>
      )
    } else {
      return (
        <div className="row">
          <div className="col-md-12">
            <FiltersButton handleChange={this.handleChange.bind(this, true)} />
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(FiltersContainer)
