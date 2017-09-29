import React from 'react'
import PropTypes from 'prop-types'

class ServiceLink extends React.Component {
  onClick = () =>
    this.props.onClick({path: 'service/' + this.props.id})

  render () {
    const {name, id} = this.props
    return (
      <div className="col-sm-4" onClick={this.onClick}>
        <h2>
          <a href="javascript:void(0)">{name}</a>
        </h2>
      </div>
    )
  }
}

ServiceLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default ServiceLink
