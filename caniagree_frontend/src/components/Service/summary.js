import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const UP_THRESHOLD = 0.8
const DOWN_THRESHOLD = 0.4

const Summary = ({ title, totalUpvotes = 0, totalDownvotes = 0 }) => {
  const warningLevel = getWarningLevel(totalUpvotes, totalDownvotes)

  return (
    <section className="container-fluid terms-header">
      <section className="container">
        <h2>{title}</h2>
        <div className="row">
          <SummaryMessage {...warningLevel} />
          <Votes totalUpvotes={totalUpvotes} totalDownvotes={totalDownvotes} />
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

const SummaryMessage = ({ warning, error, ok }) => {
  const alertClass = classnames('alert', 'alert-icon', {
    'alert-warning': warning,
    'alert-success': ok,
    'alert-danger': error
  })

  const iconClass = classnames('icon', {
    'fa-warning': warning,
    'fa-check-circle': ok,
    'fa-exclamation-circle': error
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
  } else {
    messageTitle = 'Watch out!'
    text = 'The terms of service raise very serious concerns.'
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

  const error = upPercentage <= DOWN_THRESHOLD
  const ok = upPercentage >= UP_THRESHOLD

  return {
    error,
    ok,
    warning: !error && !ok
  }
}

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  totalUpvotes: PropTypes.number.isRequired,
  totalDownvotes: PropTypes.number.isRequired
}

export default Summary
