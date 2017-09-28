import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ParagraphsList from '../../components/ParagraphsList'
import { upvoteParagraph, downvoteParagraph } from '../../actions'

export const mapStateToProps = ({ paragraphs }) => ({
  paragraphs: paragraphs.items
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onUpvoteClick: upvoteParagraph,
      onDownvoteClick: downvoteParagraph
    },
    dispatch
  )

const ParagraphsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ParagraphsList
)
export default ParagraphsListContainer
