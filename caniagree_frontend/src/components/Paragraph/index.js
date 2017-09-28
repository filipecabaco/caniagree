import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({
  id,
  body,
  upVotes = 0,
  downVotes = 0,
  onUpvoteClick,
  onDownvoteClick
}) => {
  const upVoteHandler = () => onUpvoteClick(id)
  const downVoteHandler = () => onDownvoteClick(id)

  return (
    <div>
      <div>---------------------</div>
      <div>{body}</div>
      <div>Upvotes: {upVotes}</div>
      <div>Downvotes: {downVotes}</div>
      <button onClick={upVoteHandler}>UP</button>
      <button onClick={downVoteHandler}>DOWN</button>
      <div>---------------------</div>
    </div>
  )
}

Paragraph.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  downVotes: PropTypes.number,
  upVotes: PropTypes.number,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Paragraph
