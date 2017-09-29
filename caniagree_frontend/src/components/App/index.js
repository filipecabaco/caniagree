import React from 'react'
import PropTypes from 'prop-types'
import Search from '../../containers/App/search'
import Results from './results'
import { Container, Row, Col } from 'reactstrap'

const App = ({ services, term, onServiceClicked }) => (
  <Container>
    <Row className='justify-content-center'>
      <Col lg='6'>
        <Row className='mb-2'>
          <Col>
            <h1>Can I Agree?</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Search term={term} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Results term={term} services={services} onServiceClicked={onServiceClicked} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

App.propTypes = {
  onServiceClicked: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      self: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default App
