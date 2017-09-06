import React from 'react'
import RegionButton from './RegionButton'
import DemoCard from './DemoCard'

const RegionList = ({ title, demos, isOpen }) => {
  if (isOpen) {
    return (
      <div>
        <RegionButton title={title} />
        {demos.filter(demo => demo.region === title)[0].cards.map((demo) => (
          <DemoCard key={demo.id}{...demo} />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <RegionButton title={title} />
      </div>
    )
  }
}

export default RegionList