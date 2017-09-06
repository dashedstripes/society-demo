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
    this.props.handleChange(this.state.value)
  }

  render() {
    return (
      <input type="text" className="SearchInput" placeholder="search..." value={this.state.value} onChange={this.handleChange.bind(this)} />
    )
  }
}

export default SearchInput
