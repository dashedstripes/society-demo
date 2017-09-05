import React from 'react'
import RegionButton from '../components/RegionButton'
import RegionList from '../components/RegionList'

const RegionContainer = ({ title }) => {
  return (
    <div>
      <RegionButton title={title} />
      <RegionList />
    </div>
  )
}

export default RegionContainer