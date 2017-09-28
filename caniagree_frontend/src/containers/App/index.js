import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../../components/App'
import { buttonClicked } from '../../actions'

export const mapStateToProps = ({ reducer }) => ({
  id: reducer.id,
  title: reducer.pageTitle
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onButtonClick: buttonClicked
    },
    dispatch
  )

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
