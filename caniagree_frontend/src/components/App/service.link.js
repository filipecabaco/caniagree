import React from 'react'
import PropTypes from 'prop-types'

class ServiceLink extends React.Component {
  onClick = () =>
    this.props.onClick({path: this.props.self})

  render () {
    const {self, name, id} = this.props

    return (
      <div className="col-sm-4" onClick={this.onClick}>
        <h2>{name}</h2>
      </div>
    )
  }
}

ServiceLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  self: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default ServiceLink
