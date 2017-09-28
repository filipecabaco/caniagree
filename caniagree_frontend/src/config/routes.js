import React from 'react'
import { Route } from 'react-router'
import { App } from '../containers'

const createRoutes = () => (
  <div>
    <Route path="/" component={App} />
  </div>
)

export default createRoutes
