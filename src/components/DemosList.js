import React, { Component } from 'react'
import DemoCard from './DemoCard'

class DemoList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.demos.map(demo => (
          <div className="col-md-4">
            <DemoCard key={demo.id} {...demo} />
          </div>
        ))}
      </div>
    )
  }
}

export default DemoList
