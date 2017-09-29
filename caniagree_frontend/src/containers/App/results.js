import { connect } from 'react-redux'
import Results from '../../components/App/results'

export const mapStateToProps = ({ filterServices, services }) => ({
  term: filterServices,
  services: filterServices
    ? services.filter(({name}) => name.toLowerCase().includes(filterServices.toLowerCase()))
    : []
})

const ResultsContainer = connect(mapStateToProps, null)(Results)
export default ResultsContainer
