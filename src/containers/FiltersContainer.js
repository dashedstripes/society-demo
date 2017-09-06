import React, { Component } from 'react'
import FiltersButton from '../components/FiltersButton'
import FiltersList from '../components/FiltersList'

class FiltersContainer extends Component {
  render() {
    return (
      <div>
        <FiltersButton />
        <FiltersList />
      </div>
    )
  }
}

export default FiltersContainer
