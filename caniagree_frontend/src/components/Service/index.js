import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../Paragraph'

const Service = ({
  onDownvoteClick,
  onUpvoteClick,
  paragraphs,
  serviceId,
  name
}) => {
  if (paragraphs.length < 1) {
    return null
  }

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <Paragraph
          key={index}
          {...paragraph}
          onUpvoteClick={onUpvoteClick}
          onDownvoteClick={onDownvoteClick}
        />
      ))}
    </div>
  )
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  serviceId: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    downVotes: PropTypes.number.isRequired,
    upVotes: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Service
