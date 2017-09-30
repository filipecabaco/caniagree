import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterServices, clearFilter } from '../../actions'
import Search from '../../components/App/search'

export const mapStateToProps = ({ filterServices, services }) => ({
  term: filterServices,
  services: filterServices
    ? services.filter(({name}) => name.toLowerCase().includes(filterServices.toLowerCase()))
    : []
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({filterServices, clearFilter}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
