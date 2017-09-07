import React, { Component } from 'react'
import FilterCheckbox from '../containers/FilterCheckbox'
import '../styles/FiltersList.css'

class FiltersList extends Component {
  render() {
    return (
      <ul className="FiltersList">
        {this.props.options.map((option) => {
          return (
            <FilterCheckbox key={option.id} {...option} />
          )
        })}
      </ul>
    )
  }
}

export default FiltersList
