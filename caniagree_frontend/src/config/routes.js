import React from 'react'
import { Route } from 'react-router'
import { App, Service } from '../containers'
import qs from 'qs'
import * as actions from '../actions'

const createRoutes = (store) => (
  <div>
    <Route path='/' component={App} onEnter={
        ({location: {search = ''} = {}} = {}) => {
          const {filterServices} = store.getState()

          const {q} = qs.parse(search.replace(/^\?/, ''))

          if (q && q !== filterServices) {
            store.dispatch(actions.filterServices({term: q}))
          }
        }
      } />
    <Route path='/service/:id' component={Service} onEnter={
        ({params: {id = ''} = {}} = {}) => store.dispatch(actions.getParagraphs({id}))
      } />
  </div>
)

export default createRoutes
