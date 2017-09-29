import React from 'react'
import logo from '../../../../markup/assets/imgs/logo-small.svg'

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="container">
        <h1>
          <a href="/">
            <img src={logo} height="25px" alt="Can I Agree?" />
          </a>
        </h1>
      </div>
    </header>
  )
}

export default Header
