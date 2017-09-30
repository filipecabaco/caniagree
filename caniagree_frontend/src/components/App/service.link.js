import React from 'react'
import PropTypes from 'prop-types'

class ServiceLink extends React.Component {
  onClick = () =>
    this.props.onClick({path: 'service/' + this.props.id})

  render () {
    const {name, id} = this.props
    return (
      <li onClick={this.onClick}>
        <a href="javascript:void(0)">{name}</a>
      </li>
    )
  }
}

ServiceLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ServiceLink
