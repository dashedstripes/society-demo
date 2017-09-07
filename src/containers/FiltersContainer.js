import React, { Component } from 'react'
import { connect } from 'react-redux'
import FiltersButton from '../components/FiltersButton'
import FiltersList from '../components/FiltersList'

class FiltersContainer extends Component {
  render() {
    if (this.props.filters.isOpen) {
      return (
        <div>
          <FiltersButton />
          <FiltersList />
        </div>
      )
    } else {
      return (
        <FiltersButton />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps)(FiltersContainer)
