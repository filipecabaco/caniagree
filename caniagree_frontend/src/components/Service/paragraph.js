import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

const Paragraph = ({
  id,
  body,
  up_vote,
  down_vote,
  onUpvoteClick,
  onDownvoteClick
}) => {
  const upVoteHandler = () => onUpvoteClick({ id })
  const downVoteHandler = () => onDownvoteClick({ id })

  return (
    <Row>
      <Col sm='8' className='text'>
        <p>{body}</p>
      </Col>

      <Col sm='4' className='info'>
        <ul className='small list-inline'>
          <li className='upvote' onClick={upVoteHandler}>
            <a href="#"><i className='icon fa-arrow-up' aria-hidden='true'></i> Upvote</a> <span>({up_vote})</span>
          </li>

          <li className='downvote' onClick={downVoteHandler}>
            <a href="#"><i className='icon fa-arrow-down' aria-hidden='true'></i> Downvote</a> <span>({down_vote})</span>
          </li>
        </ul>
      </Col>
    </Row>
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
