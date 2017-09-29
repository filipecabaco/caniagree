import React from 'react'
import PropTypes from 'prop-types'
import Summary from './summary'
import Header from './header'
import ParagraphsList from './paragraphs.list'

const Service = ({
  onDownvoteClick,
  onUpvoteClick,
  paragraphs,
  serviceId,
  name
}) => {
  const { totalUpvotes, totalDownvotes } = paragraphs.reduce(
    (totals, paragraph) => {
      totals.totalUpvotes += paragraph.up_vote
      totals.totalDownvotes += paragraph.down_vote

      return totals
    },
    { totalUpvotes: 0, totalDownvotes: 0 }
  )

  return (
    <div className="results">
      <Header />

      <Summary
        title={name}
        totalUpvotes={totalUpvotes}
        totalDownvotes={totalDownvotes}
      />

      <ParagraphsList
        onDownvoteClick={onDownvoteClick}
        onUpvoteClick={onUpvoteClick}
        paragraphs={paragraphs}
      />
    </div>
  )
}

Service.propTypes = {
  name: PropTypes.string.isRequired,
  serviceId: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      down_vote: PropTypes.number.isRequired,
      up_vote: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onUpvoteClick: PropTypes.func.isRequired,
  onDownvoteClick: PropTypes.func.isRequired
}

export default Service
