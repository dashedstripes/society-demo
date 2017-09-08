import React, { Component } from 'react'
import '../styles/SearchInput.css'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.props.handleChange(e.target.value)
  }

  render() {
    return (
      <input type="text" className="SearchInput" placeholder="search..." value={this.props.value} onChange={this.handleChange.bind(this)} />
    )
  }
}

export default SearchInput
