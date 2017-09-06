import React from 'react'
import { connect } from 'react-redux'
import DemosList from '../components/DemosList'

const DemosContainer = ({ region, demos }) => {
  return (
    <div>
      <h2>{region}</h2>
      <DemosList demos={demos} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  region: state.currentRegion,
  demos: state.demos.filter(demo => demo.region === state.currentRegion)[0].cards
})

export default connect(mapStateToProps)(DemosContainer)