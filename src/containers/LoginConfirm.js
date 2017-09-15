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

                <h4>Terms and conditions</h4>
                <hr />

                <p>You are about to access {this.props.data.name}, a demo environment shared by hundreds of Zendesk employees around the world.</p>
                <p>By clicking "Accept", you acknowledge that you have completed all necessary training, and you pledge to:</p>

                <ul>
                  <li>Be respectful of the work and efforts put into this demo instance.</li>
                  <li>Revert any changes that you've made that aren't part of the official scripts.</li>
                  <li>Only submit tickets relevant to the use-case you are presenting (nothing like: "test123 blablabla").</li>
                </ul>

                <p>If you are unsure, please click on the "docs" button to review the documentation.</p>
                <p>All actions are monitored, and you will be held accountable for violating those rules.</p>
                <p>Repeat offenders may lose their access rights.</p>

                <p className="LoginConfirmText">By accepting these terms you agree that you have read and understood the terms and conditions for {this.props.data.name}.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <a className="LoginConfirmButton" href={this.props.data.url} target="_blank">Accept</a>
              </div>
              <div className="col-md-6">
                <a className="LoginConfirmButton" href="" onClick={this.handleClick.bind(this)}>Decline</a>
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
