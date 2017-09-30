import React from 'react'
import PropTypes from 'prop-types'
import ServiceLink from '../../containers/App/service.link'

const Results = ({services, term}) => {
  if (!term || !services.length) {
    return null
  }

  return (
    <div className="results text-left">
      <ul className="list-unstyled">
      {
        services.map((service) => (
          <ServiceLink
            key={service.id}
            {...service}
          />
        ))
      }</ul>
    </div>
  )
}

Results.propTypes = {
  services: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired
}

export default Results
