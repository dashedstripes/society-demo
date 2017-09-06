import React, { Component } from 'react'

class DemoCard extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <a href={this.props.url}>{this.props.url}</a>
        <p>{this.props.description}</p>
        <p>{this.props.type}</p>
        <a href={this.props.login}>login</a>
        <a href={this.props.docs}> docs</a>
      </div>
    );
  }
}

export default DemoCard
