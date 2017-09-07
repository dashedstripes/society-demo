import React, { Component } from 'react'
import FilterCheckbox from './FilterCheckbox'
import '../styles/FiltersList.css'

class FiltersList extends Component {
  render() {
    return (
      <div className="FiltersList">
        {this.props.options.map((option) => {
          return (
            <FilterCheckbox {...option} />
          )
        })}
      </div>
    )
  }
}

export default FiltersList
