import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setRoute } from '../actions'
import Header from '../components/Service/header'

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick: setRoute }, dispatch)

const HeaderContainer = connect(null, mapDispatchToProps)(Header)

export default HeaderContainer
