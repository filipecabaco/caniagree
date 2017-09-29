import { connect } from 'react-redux'
import Results from '../../components/App/results'

export const mapStateToProps = ({ filterServices, services }) => ({
  term: filterServices,
  services: filterServices
    ? services.filter(({name}) => name.includes(filterServices))
    : []
})

const ResultsContainer = connect(mapStateToProps, null)(Results)
export default ResultsContainer
