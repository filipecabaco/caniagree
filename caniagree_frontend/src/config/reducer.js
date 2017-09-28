import { combineReducers } from 'redux'
import reducers from '../reducers'

export default additionalReducers =>
  combineReducers({
    ...reducers,
    ...additionalReducers
  })
