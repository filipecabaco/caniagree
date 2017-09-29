import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({
  id,
  body,
  upVotes,
  downVotes,
  onUpvoteClick,
  onDownvoteClick
}) => {
  const upVoteHandler = () => onUpvoteClick({id})
  const downVoteHandler = () => onDownvoteClick({id})

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
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Paragraph
