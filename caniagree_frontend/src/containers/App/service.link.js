import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setRoute } from '../../actions'
import ServiceLink from '../../components/App/service.link'

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    onClick: setRoute
  }, dispatch)

const ServiceLinkContainer = connect(null, mapDispatchToProps)(ServiceLink)
export default ServiceLinkContainer
