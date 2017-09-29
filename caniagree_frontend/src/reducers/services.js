import * as actionTypes from '../constants/action.types'

const initialState = []

export default (state = initialState, {type, payload: {services = []} = {}} = {}) => {
  switch (type) {
    case actionTypes.SET_SERVICES:
      return services.map(
        ({id, self, name}) =>
          ({id, self, name})
      )
    case actionTypes.CLEAR_SERVICES:
      return initialState
    default:
      return state
  }
}
