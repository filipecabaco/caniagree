import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../../markup/assets/imgs/logo-small.svg'

class Header extends React.Component {
  onClick = () =>
    this.props.onClick({path: '/'})

  render () {
    return (
      <header className="container-fluid">
        <div className="container" onClick={this.onClick}>
          <h1>
            <a href="javascript:void(0)">
              <img src={logo} height="25px" alt="Can I Agree?" />
            </a>
          </h1>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Header
