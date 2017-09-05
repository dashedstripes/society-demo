import React from 'react'
import RegionButton from './RegionButton'
import DemoCard from './DemoCard'

const RegionList = ({ title, demos }) => {
  return (
    <div>
      <RegionButton title={title} />
      {demos.filter(demo => demo.region === title)[0].cards.map((demo) => (
        <DemoCard key={demo.id}{...demo} />
      ))}
    </div>
  )
}

export default RegionList