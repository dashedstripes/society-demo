import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegionList from '../components/RegionList'
import '../styles/RegionsContainer.css'

class RegionsContainer extends Component {
  render() {
    return (
      <div className="RegionsContainer">
        <h2 className="RegionsContainerTitle">Regions</h2>
        {this.props.demos.map((demo, index) => {
          return (
            <RegionList key={index} title={demo.region} demos={demo.cards} isOpen={demo.isOpen} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    demos: state.demos.filter((demo) => demo.region !== state.currentRegion)
  })
}

export default connect(mapStateToProps)(RegionsContainer)
