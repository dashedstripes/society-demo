import React, { Component } from 'react'
import FilterCheckbox from './FilterCheckbox'
import '../styles/FiltersList.css'

class FiltersList extends Component {
  render() {
    return (
      <ul className="FiltersList">
        {this.props.options.map((option, index) => {
          return (
            <FilterCheckbox key={index} {...option} />
          )
        })}
      </ul>
    )
  }
}

export default FiltersList
