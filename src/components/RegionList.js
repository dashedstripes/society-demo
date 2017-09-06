import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegionButton from './RegionButton'
import DemoCard from './DemoCard'

class RegionList extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <RegionButton title={this.props.title} />
          {this.props.demos.filter(demo => demo.region === this.props.title)[0].cards.map((demo) => (
            <DemoCard key={demo.id}{...demo} />
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <RegionButton title={this.props.title} />
        </div>
      )
    }
  }
}

export default connect()(RegionList)