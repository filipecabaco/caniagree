import React from 'react'
import PropTypes from 'prop-types'
import Search from '../../containers/search'
import { Container, Row, Col } from 'reactstrap'

const App = ({ services }) => (
  <Container>
    <Row>
      <Col>
        <h1>Can I Agree?</h1>
      </Col>
    </Row>

    <Row>
      <Col>
        <Search />
      </Col>
    </Row>

    <Row>
      <Col>
        {services.map(({ self, name, id }) => (
          <div key={id}>
            <span>{self}</span>
            <span>{name}</span>
            <span>{id}</span>
          </div>
        ))}
      </Col>
    </Row>
  </Container>
)

App.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      self: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

export default App
