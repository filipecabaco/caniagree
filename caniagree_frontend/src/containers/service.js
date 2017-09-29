import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { upvoteParagraph, downvoteParagraph, toggleParagraphs } from '../actions'
import Service from '../components/Service'

export const mapStateToProps = ({ service }) => service

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onUpvoteClick: upvoteParagraph,
      onDownvoteClick: downvoteParagraph,
      onParagraphToggleClick: toggleParagraphs
    },
    dispatch
  )

const ServiceContainer = connect(mapStateToProps, mapDispatchToProps)(Service)

export default ServiceContainer
