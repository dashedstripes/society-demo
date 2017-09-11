import React, { Component } from 'react'
import '../styles/DemoCard.css'

class DemoCard extends Component {
  render() {
    return (
      <div className="DemoCard">
        <div className="DemoCardTop" style={{ backgroundColor: this.props.color }}>
          <h4 className="DemoCardName">{this.props.name}</h4>
          <a href={this.props.url} className="DemoCardURL">{this.props.url.replace('https://', '')}</a>
        </div>
        <div className="DemoCardBottom">
          <div className="DemoCardBottomLeft">
            <p>{this.props.description}</p>
            <p className="DemoCardType">{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1)}</p>
          </div>
          <div className="DemoCardBottomRight">
            <a className="DemoCardLink" target="_blank" href={this.props.login}>login</a>
            <a className="DemoCardLink" target="_blank" href={this.props.docs}>docs</a>
          </div>
        </div>
      </div >
    );
  }
}

export default DemoCard
