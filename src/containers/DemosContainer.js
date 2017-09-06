import React, { Component } from 'react'
import { connect } from 'react-redux'
import DemosList from '../components/DemosList'

class DemosContainer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.region}</h2>
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

