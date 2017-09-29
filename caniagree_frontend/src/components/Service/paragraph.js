import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap'

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

      <Col sm='4'>
        <ListGroup>
          <ListGroupItem className='upvote' onClick={upVoteHandler}>
            <i className='icon fa-arrow-up' aria-hidden='true'></i> Upvote <span>({up_vote})</span>
          </ListGroupItem>

          <ListGroupItem className='downvote' onClick={downVoteHandler}>
            <i className='icon fa-arrow-down' aria-hidden='true'></i> Downvote <span>({down_vote})</span>
          </ListGroupItem>
        </ListGroup>
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
