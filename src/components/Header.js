import React, { Component } from 'react'
import '../styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <h4 className="HeaderTitle">zendesk<span className="HeaderSocietyTitle">demo</span></h4>
        </div>
      </div>
    )
  }
}

export default Header
