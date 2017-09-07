import React, { Component } from 'react'
import '../styles/FilterCheckbox.css'

class FilterCheckbox extends Component {
  render() {
    return (
      <li className="FilterCheckbox">
        <label>{this.props.label}</label>
        <input type="checkbox" checked={this.props.isChecked} />
      </li>
    );
  }
}

export default FilterCheckbox
