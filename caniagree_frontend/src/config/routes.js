import React from 'react'
import { Route } from 'react-router'
import { App, Service } from '../containers'
import * as actions from '../actions'

const createRoutes = (dispatch) => (
  <div>
    <Route path='/' component={App} />
    <Route path='/service/:id' component={Service} onEnter={
        ({params: {id} = {}} = {}) => dispatch(actions.getParagraphs({id}))
      } />
  </div>
)

export default createRoutes
