import React from 'react'
import Search from '../../containers/App/search'
import Results from '../../containers/App/results'
import { Container, Row, Col } from 'reactstrap'

const App = () => (
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
            <Results />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default App
