import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../../components/App'
import { setRoute } from '../../actions'

export const mapStateToProps = ({ filterServices, services }, ownProps) => ({
  term: filterServices,
  services: filterServices
    ? services.filter(({name}) => name.includes(filterServices))
    : []
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    onServiceClicked: setRoute
  }, dispatch)

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer
