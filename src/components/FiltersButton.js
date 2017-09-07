import React, { Component } from 'react'
import '../styles/FiltersButton.css'

class FiltersButton extends Component {
  render() {
    return (
      <button className="FiltersButton" onClick={this.props.handleChange}>Filters</button>
    )
  }
}

export default FiltersButton
