import React, { Component } from 'react'
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

export default LoginConfirm
