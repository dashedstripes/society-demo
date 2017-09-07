import React, { Component } from 'react'
import FilterCheckbox from './FilterCheckbox'
import '../styles/FiltersList.css'

class FiltersList extends Component {
  render() {
    return (
      <div className="FiltersList">
        <FilterCheckbox />
      </div>
    )
  }
}

export default FiltersList
