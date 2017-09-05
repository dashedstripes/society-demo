import React from 'react'
import DemoCard from './DemoCard'

const DemosList = ({ demos }) => (
  <div>
    {demos.map(demo => (
      <DemoCard key={demo.id} {...demo} />
    ))}
  </div>
)

export default DemosList