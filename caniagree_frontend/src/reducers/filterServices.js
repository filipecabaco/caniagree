import * as actionTypes from '../constants/action.types'

const initialState = ''

export default (state = initialState, {type, payload: {term = ''} = {}} = {}) => {
  switch (type) {
    case actionTypes.FILTER_SERVICES:
      return term
    case actionTypes.CLEAR_FILTER:
      return initialState
    default:
      return state
  }
}
