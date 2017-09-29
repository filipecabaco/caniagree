import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({
  id,
  body,
  up_vote,
  down_vote,
  onUpvoteClick,
  onDownvoteClick
}) => {
  const upVoteHandler = () => onUpvoteClick({id})
  const downVoteHandler = () => onDownvoteClick({id})

  return (
    <div>
      <div>---------------------</div>
      <div>{body}</div>
      <div>up_vote: {up_vote}</div>
      <div>down_vote: {down_vote}</div>
      <button onClick={upVoteHandler}>UP</button>
      <button onClick={downVoteHandler}>DOWN</button>
      <div>---------------------</div>
    </div>
  )
}

Paragraph.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  up_vote: PropTypes.number.isRequired,
  down_vote: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Paragraph
