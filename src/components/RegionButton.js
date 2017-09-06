import React, { Component } from 'react'
import '../styles/RegionButton.css'

class RegionButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="RegionButton">{this.props.title}</button>
    )
  }
}

export default RegionButton
