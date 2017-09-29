import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'reactstrap'

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
    <Row className="mb-4">
      <Col lg="8">
        <p>{body}</p>
      </Col>
      <Col lg="4">
        <p>Upvotes: {up_vote}</p>
        <p>Downvotes: {down_vote}</p>
        <Button className="mr-2" onClick={upVoteHandler}>
          +
        </Button>
        <Button onClick={downVoteHandler}>-</Button>
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
