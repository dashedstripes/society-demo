import React, { Component } from 'react'
import DemoCard from './DemoCard'

class ResultsList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.results.map((result) => {
          return (
            <div className="col-md-4">
              <DemoCard key={result.id} {...result} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ResultsList
