import React from 'react'
import { Route } from 'react-router'
import { App, ParagraphsList } from '../containers'

const createRoutes = () => (
  <div>
    <Route path='/' component={App} />
    <Route path='/service/:id' component={ParagraphsList} />
  </div>
)

export default createRoutes
