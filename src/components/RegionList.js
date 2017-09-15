import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleRegion } from '../actions'
import RegionButton from './RegionButton'
import DemoCard from '../containers/DemoCard'

class RegionList extends Component {

  handleClick(e) {
    this.props.dispatch(toggleRegion({ region: this.props.title, isOpen: e }))
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <RegionButton title={this.props.title} onClick={this.handleClick.bind(this, false)} />
          <div className="row">
            {this.props.demos.filter(demo => demo.region === this.props.title)[0].cards.map((demo) => (
              <div key={demo.id} className="col-md-4">
                <DemoCard {...demo} />
              </div>
            ))}
          </div>
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