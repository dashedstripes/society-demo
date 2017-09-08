import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFilterOption, setIsActive } from '../actions'
import '../styles/FilterCheckbox.css'

class FilterCheckbox extends Component {

  handleChange(e) {
    this.props.dispatch(toggleFilterOption({ id: this.props.id, isChecked: !this.props.isChecked }))
    this.props.dispatch(setIsActive(true))
  }

  render() {
    return (
      <li className="FilterCheckbox">
        <label className="FilterCheckboxLabel">{this.props.label}</label>
        <input type="checkbox" className="FilterCheckboxInput" checked={this.props.isChecked} onChange={this.handleChange.bind(this)} />
      </li>
    );
  }
}

export default connect()(FilterCheckbox)
