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
    if (e.target.value !== '') {
      this.props.setIsActive(true)
    }
  }

  render() {
    return (
      <input type="text" className="SearchInput" placeholder="Search for an instance or app..." value={this.props.value} onChange={this.handleChange.bind(this)} />
    )
  }
}

export default SearchInput
