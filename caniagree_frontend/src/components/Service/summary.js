import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ParagraphFilter from './paragraphFilter'
import { UP_THRESHOLD, DOWN_THRESHOLD, VOTES_THRESHOLD } from '../../constants/thresholds'

const Summary = ({
  title,
  totalUpvotes = 0,
  totalDownvotes = 0,
  totalFilteredParagraphs = 0,
  onParagraphToggleClick
}) => {
  const warningLevel = getWarningLevel(totalUpvotes, totalDownvotes)

  return (
    <section className="container-fluid terms-header">
      <section className="container">
        <h2>{title}</h2>
        <div className="row">
          <SummaryMessage {...warningLevel} />
          <Votes totalUpvotes={totalUpvotes} totalDownvotes={totalDownvotes} />
          <ParagraphFilter onToggleClick={onParagraphToggleClick} 
            totalFilteredParagraphs={totalFilteredParagraphs}/>
        </div>
      </section>
    </section>
  )
}

const Votes = ({ totalUpvotes, totalDownvotes }) => {
  return (
    <div className="col-sm-4">
      <span className="text-uppercase">Totals</span>
      <ul className="list-unstyled vote-summary">
        <li className="upvote">
          <i className="icon fa-arrow-up" aria-hidden="true" /> {totalUpvotes}{' '}
          <span>Upvotes</span>
        </li>
        <li className="downvote">
          <i className="icon fa-arrow-down" aria-hidden="true" />{' '}
          {totalDownvotes} <span>Downvotes</span>
        </li>
      </ul>
    </div>
  )
}

const SummaryMessage = ({ warning, error, ok, neutral }) => {
  const alertClass = classnames('alert', 'alert-icon', {
    'alert-warning': warning,
    'alert-success': ok,
    'alert-danger': error,
    'alert-info': neutral
  })

  const iconClass = classnames('icon', {
    'fa-warning': warning,
    'fa-check-circle': ok,
    'fa-exclamation-circle': error,
    'fa-info-circle': neutral
  })

  let messageTitle = ''
  let text = ''
  if (warning) {
    messageTitle = 'Proceed with caution'
    text =
      'The terms of service are okay but some issues need your consideration.'
  } else if (ok) {
    messageTitle = "It's OK"
    text =
      'The terms of services are fair towards the user but they could be improved.'
  } else if (error) {
    messageTitle = 'Watch out!'
    text = 'The terms of service raise very serious concerns.'
  } else {
    messageTitle = 'Not enough votes, yet...'
    text = 'We still do not have enough data to know if it is safe to agree.'
  }

  return (
    <div className="col-sm-8">
      <div role="alert" className={alertClass}>
        <i className={iconClass} aria-hidden="true" />
        <h4>{messageTitle}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

const getWarningLevel = (totalUpvotes, totalDownvotes) => {
  const totalVotes = totalUpvotes + totalDownvotes
  const upPercentage = totalUpvotes / totalVotes

  if (totalVotes < VOTES_THRESHOLD) {
    return {
      neutral: true,
      error: false,
      ok: false,
      warning: false
    }
  }

  const error = upPercentage <= DOWN_THRESHOLD
  const ok = upPercentage >= UP_THRESHOLD

  return {
    neutral: false,
    error,
    ok,
    warning: !error && !ok
  }
}

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  totalUpvotes: PropTypes.number.isRequired,
  totalDownvotes: PropTypes.number.isRequired,
  totalFilteredParagraphs: PropTypes.number.isRequired,
  onParagraphToggleClick: PropTypes.func.isRequired
}

export default Summary
