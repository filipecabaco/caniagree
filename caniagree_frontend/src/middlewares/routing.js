import { routerActions } from 'react-router-redux'
import * as actionTypes from '../constants/action.types'

export default store => next => action => {
  next(action)

  const {type, payload = {}} = action
  const {term = ''} = payload

  switch (type) {
    case actionTypes.FILTER_SERVICES:
      const {services} = store.getState()

      const filteredServices = services.filter(({name}) => name.includes(term))

      if (filteredServices.length === 1) {
        store.dispatch(routerActions.push(filteredServices[0].self))
      }
  }
}
