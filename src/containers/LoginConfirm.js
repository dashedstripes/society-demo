import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/LoginConfirm.css'

class LoginConfirm extends Component {
  render() {
    if (this.props.isOpen) {
      return (
        <div>
          <div className="LoginConfirmOverlay"></div>
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
