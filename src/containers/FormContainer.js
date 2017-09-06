import React, { Component } from 'react'
import SearchInput from '../components/SearchInput'
import FiltersContainer from './FiltersContainer'
import '../styles/FormContainer.css'

class FormContainer extends Component {
  render() {
    return (
      <div className="FormContainer">
        <div className="row">
          <div className="col-md-8">
            <SearchInput />
          </div>
          <div className="col-md-4">
            <FiltersContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default FormContainer
