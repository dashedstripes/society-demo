import React, { Component } from 'react'
import '../styles/DemoCard.css'

class DemoCard extends Component {
  render() {
    return (
      <div className="DemoCard">
        <div className="DemoCardTop">
          <h4 className="DemoCardName">{this.props.name}</h4>
          <a href={this.props.url} className="DemoCardURL">{this.props.url}</a>
        </div>
        <div className="DemoCardBottom">
          <div className="DemoCardBottomLeft">
            <p>{this.props.description}</p>
            <p>{this.props.type}</p>
          </div>
          <div className="DemoCardBottomRight">
            <div>
              <a href={this.props.login}>login</a>
            </div>
            <div>
              <a href={this.props.docs}> docs</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoCard
