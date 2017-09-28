import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createRoutes from './config/routes'

class Root extends React.Component {
  render() {
    const { store, history } = this.props
    const routes = createRoutes()

    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
