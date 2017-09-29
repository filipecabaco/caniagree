import React from 'react'
import PropTypes from 'prop-types'
import Search from '../../containers/search'
import { Container, Row, Col } from 'reactstrap'

const App = ({ services }) => (
  <Container>
    <Row className="justify-content-center">
      <Col lg="6">
        <Row className="mb-2">
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
