import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRegion } from '../actions'
import RegionButton from './RegionButton'
import DemoCard from './DemoCard'

class RegionList extends Component {

  handleClick(e) {
    this.props.dispatch(toggleRegion({ region: this.props.title, isOpen: e }))
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <RegionButton title={this.props.title} onClick={this.handleClick.bind(this, false)} />
          {this.props.demos.filter(demo => demo.region === this.props.title)[0].cards.map((demo) => (
            <DemoCard key={demo.id}{...demo} />
          ))}
        </div>
      )
    } else {
      return (
        <div>
          <RegionButton title={this.props.title} onClick={this.handleClick.bind(this, true)} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(RegionList)