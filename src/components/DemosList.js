import React, { Component } from 'react'
import DemoCard from './DemoCard'

class DemoList extends Component {
  render() {
    return (
      <div>
        {this.props.demos.map(demo => (
          <DemoCard key={demo.id} {...demo} />
        ))}
      </div>
    )
  }
}

export default DemoList
