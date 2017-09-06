import React, { Component } from 'react'
import SearchInput from '../components/SearchInput'
import FiltersContainer from './FiltersContainer'

class FormContainer extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <FiltersContainer />
      </div>
    )
  }
}

export default FormContainer
