import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../actions'
import '../styles/LoginConfirm.css'

class LoginConfirm extends Component {

  handleClick() {
    this.props.dispatch(closeModal())
  }

  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className="LoginConfirmOverlay" onClick={this.handleClick.bind(this)}></div>
          <div className="LoginConfirm">
            LoginConfirm
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
