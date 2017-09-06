import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchInput } from '../actions'
import SearchInput from '../components/SearchInput'
import FiltersContainer from './FiltersContainer'
import '../styles/FormContainer.css'

class FormContainer extends Component {

  handleChange(value) {
    this.props.dispatch(setSearchInput(value))
  }

  render() {
    return (
      <div className="FormContainer">
        <div className="row">
          <div className="col-md-8">
            <SearchInput value={this.props.searchInput} handleChange={this.handleChange.bind(this)} />
          </div>
          <div className="col-md-4">
            <FiltersContainer />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  searchInput: state.searchInput
})

export default connect(mapStateToProps)(FormContainer)
