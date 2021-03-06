import React, { Component } from 'react'
import DemoCard from '../containers/DemoCard'

class ResultsList extends Component {
  render() {
    if (this.props.results.length > 0) {
      return (
        <div className="row">
          {this.props.results.map((result, index) => {
            return (
              <div key={index} className="col-md-4">
                <DemoCard {...result} />
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <h4>No results found...</h4>
      )
    }
  }
}

export default ResultsList
