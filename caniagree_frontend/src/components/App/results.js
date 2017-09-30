import React from 'react'
import PropTypes from 'prop-types'
import ServiceLink from '../../containers/App/service.link'

const Results = ({services, term}) => {
  if (term && !services.length) {
    return (
      <div className="container intro">
        <div className="row">
          <div className="col-sm-4"><h2>No results found!</h2></div>
        </div>
      </div>
    )
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
