import React from 'react'
import PropTypes from 'prop-types'
import ServiceLink from '../../containers/App/service.link'

const Results = ({services, term}) => {
  if (term && !services.length) {
    return (
      <div>No results found</div>
    )
  }

  return (
    <div>{
      services.map((service) => (
        <ServiceLink
          key={service.id}
          {...service}
        />
      ))
    }</div>
  )
}

Results.propTypes = {
  services: PropTypes.array.isRequired,
  term: PropTypes.string.isRequired
}

export default Results
