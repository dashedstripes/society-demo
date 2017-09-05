import React from 'react'
import { connect } from 'react-redux'
import RegionList from '../components/RegionList'

const RegionsContainer = ({ regions, demos }) => (
  <div>
    <h2>Regions</h2>
    {regions.map((region, index) => (
      <RegionList key={index} title={region} demos={demos} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  regions: state.demos.filter(demo => demo.region !== state.currentRegion).map(demo => demo.region),
  demos: state.demos
})

export default connect(mapStateToProps)(RegionsContainer)