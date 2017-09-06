import React, { Component } from 'react'
import '../styles/ClearSearchButton.css'

class ClearSearchButton extends Component {
  render() {
    return (
      <button className="ClearSearchButton" onClick={this.props.handleClick}>Clear Search</button>
    )
  }
}

export default ClearSearchButton
