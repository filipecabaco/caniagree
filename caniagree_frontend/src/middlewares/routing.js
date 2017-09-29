import { routerActions } from 'react-router-redux'
import * as actionTypes from '../constants/action.types'

export default store => next => action => {
  next(action)

  const {type, payload: {path = ''} = {}} = action

  switch (type) {
    case actionTypes.SET_ROUTE:
      store.dispatch(routerActions.push(path))
  }
}
