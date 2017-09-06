import React, { Component } from 'react'

class RegionButton extends Component {
  render() {
    return (
      <div>
        <button>{this.props.title}</button>
      </div>
    )
  }
}

export default RegionButton
