import React from 'react'
import ReactDOM from 'react-dom'
import init from './config'
import Root from './root'

window.ReactApp = window.ReactApp || {}

window.ReactApp.CanIAgree = {
  start: function(rootElement, params) {
    startApp(rootElement, params)
  },
  stop: function(rootElement) {
    ReactDOM.unmountComponentAtNode(rootElement)
  }
}

function startApp(rootElement, { getAuthToken, ...params }) {
  const options = init({ ...params })

  ReactDOM.render(<Root {...options} />, rootElement)
}
