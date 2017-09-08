import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleFilterOption } from '../actions'
import '../styles/FilterCheckbox.css'

class FilterCheckbox extends Component {

  handleChange(e) {
    this.props.dispatch(toggleFilterOption({ id: this.props.id, isChecked: !this.props.isChecked }))
  }

  render() {
    return (
      <li className="FilterCheckbox">
        <label className="FilterCheckboxLabel">{this.props.label}</label>
        <input type="checkbox" checked={this.props.isChecked} onChange={this.handleChange.bind(this)} />
      </li>
    );
  }
}

export default connect()(FilterCheckbox)
