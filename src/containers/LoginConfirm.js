import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../actions'
import '../styles/LoginConfirm.css'

class LoginConfirm extends Component {

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(closeModal())
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className="LoginConfirmOverlay" onClick={this.handleClick.bind(this)}></div>
          <div className="LoginConfirm">
            <div className="row">
              <div className="col-md-12">
                <p className="LoginConfirmText">By accepting these terms you agree that you have read and understood the documentation for {this.props.data.name}.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a className="LoginConfirmButton" href={this.props.data.url} target="_blank">Accept</a>
              </div>
              <div className="col-md-6">
                <a className="LoginConfirmButton" href="">Decline</a>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => state.modal

export default connect(mapStateToProps)(LoginConfirm)
