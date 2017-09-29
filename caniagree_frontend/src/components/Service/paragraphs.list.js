import React from 'react'
import PropTypes from 'prop-types'
import Paragraph from './paragraph'

const Service = ({
  onDownvoteClick,
  onUpvoteClick,
  paragraphs
}) => {
  return (
    <section className='container-fluid terms'>
      <div className='container'>
        <div className='panel'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Terms and Conditions</h3>
          </div>

          <div className='panel-body'>
            {paragraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                {...paragraph}
                up_vote={paragraph.up_vote}
                down_vote={paragraph.down_vote}
                onUpvoteClick={onUpvoteClick}
                onDownvoteClick={onDownvoteClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Service.propTypes = {
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
