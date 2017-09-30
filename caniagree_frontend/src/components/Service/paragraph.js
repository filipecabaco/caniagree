import React from 'react'
import PropTypes from 'prop-types'
import { UP_THRESHOLD, DOWN_THRESHOLD, VOTES_THRESHOLD } from '../../constants/thresholds'
import getParagraphWarningLevel from '../../utils/paragraph.utils'

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

  const { totalVotes, ratio, level } = getParagraphWarningLevel(up_vote, down_vote)

  return (
    <div className='row'>

      <div className='col-sm-8 text'>
        {
          totalVotes > VOTES_THRESHOLD
            ? (
              <div className={'alert alert-alt alert-' + level} role='alert'>
                <p>{body}</p>
              </div>
              )
            : (<p>{body}</p>)
        }
      </div>

      <div className='col-sm-4 info'>
        <ul className='small list-inline'>
          <li className='upvote' onClick={upVoteHandler}>
            <a href='javascript:void(0)'><i className='icon fa-arrow-up' aria-hidden='true'></i> Upvote</a> <span>({up_vote})</span>
          </li>

          <li className='downvote' onClick={downVoteHandler}>
            <a href='javascript:void(0)'><i className='icon fa-arrow-down' aria-hidden='true'></i> Downvote</a> <span>({down_vote})</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

Paragraph.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  up_vote: PropTypes.number.isRequired,
  down_vote: PropTypes.number.isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Paragraph
