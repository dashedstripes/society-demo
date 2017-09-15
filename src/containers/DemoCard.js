import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setModal, openModal } from '../actions'
import '../styles/DemoCard.css'

class DemoCard extends Component {

  handleLogin(e) {
    e.preventDefault();
    let card = {
      name: this.props.name,
      url: this.props.url
    }
    this.props.dispatch(setModal(card))
    this.props.dispatch(openModal())
  }
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
            <a className="DemoCardLink" target="_blank" href={this.props.login} onClick={this.handleLogin.bind(this)}>login</a>
            <a className="DemoCardLink" target="_blank" href={this.props.docs}>docs</a>
          </div>
        </div>
      </div >
    );
  }
}

export default connect()(DemoCard)
