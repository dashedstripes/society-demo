import React from 'react'
import { connect } from 'react-redux'
import RegionContainer from './RegionContainer'

const RegionsContainer = ({ regions }) => (
  <div>
    <h2>Regions</h2>
    {regions.map((region, index) => (
      <RegionContainer key={index} title={region} />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  regions: state.demos.map(demo => demo.region)
})

export default connect(mapStateToProps)(RegionsContainer)