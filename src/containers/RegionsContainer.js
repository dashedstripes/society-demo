import React from 'react'
import { connect } from 'react-redux'
import RegionList from '../components/RegionList'

const RegionsContainer = ({ regions, demos }) => {
  return (
    <div>
      <h2>Regions</h2>
      {regions.map((region, index) => (
        <RegionList key={index} title={region.region} demos={demos} isOpen={region.isOpen} />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
    regions: state.demos.filter(demo => demo.region !== state.currentRegion).map((demo) => {
      return { region: demo.region, isOpen: demo.isOpen }
    }),
    demos: state.demos
  })
}

export default connect(mapStateToProps)(RegionsContainer)