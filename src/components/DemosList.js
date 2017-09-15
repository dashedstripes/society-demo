import React, { Component } from 'react'
import DemoCard from '../containers/DemoCard'

class DemoList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.demos.map(demo => {
          return (
            <div key={demo.id} className="col-md-4">
              <DemoCard {...demo} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default DemoList
