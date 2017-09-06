import React, { Component } from 'react'
import { connect } from 'react-redux'
import DemosList from '../components/DemosList'
import '../styles/DemosContainer.css'

class DemosContainer extends Component {
  render() {
    return (
      <div className="DemosContainer">
        <h2 className="DemosContainerTitle">{this.props.region}</h2>
        <DemosList demos={this.props.demos} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    region: state.currentRegion,
    demos: state.demos.filter((demo) => demo.region === state.currentRegion)[0].cards
  })
}

export default connect(mapStateToProps)(DemosContainer)

