import React from 'react'
import PropTypes from 'prop-types'
import Search from '../../containers/search'

const App = ({ services }) => (
  <div>
    <p>cenas</p>
    <Search />
    {
      services.map(({self, name, id}) => (
        <div key={id}>
          <span>{self}</span>
          <span>{name}</span>
          <span>{id}</span>
        </div>
      ))
    }
  </div>
)

App.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    self: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
}

export default App
