import React from 'react'
import { Route } from 'react-router'
import * as actions from '../actions'
import qs from 'qs'
import App from '../components/App'
import { Service } from '../containers'

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
