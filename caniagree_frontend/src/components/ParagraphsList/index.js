import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from '../Paragraph'

const ParagraphsList = ({
  paragraphs = [],
  onUpvoteClick,
  onDownvoteClick
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

ParagraphsList.propTypes = {
  paragraphs: PropTypes.array,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default ParagraphsList
