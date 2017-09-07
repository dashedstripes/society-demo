import React, { Component } from 'react'

class FilterCheckbox extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="checkbox" checked={this.props.isChecked} />
      </div>
    );
  }
}

export default FilterCheckbox
