import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterServices, clearFilter } from '../../actions'
import Search from '../../components/App/search'

export const mapDispatchToProps = dispatch =>
  bindActionCreators({filterServices, clearFilter}, dispatch)

export default connect(null, mapDispatchToProps)(Search)
