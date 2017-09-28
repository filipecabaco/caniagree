import React from 'react'
import PropTypes from 'prop-types'

const App = ({ onButtonClick }) => (
  <div>
    <div>Can I Agree?</div>
  </div>
)

App.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default App
