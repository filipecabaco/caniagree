import * as actionTypes from '../constants/action.types'

const initialState = {
  paragraphs: [],
  serviceId: '',
  name: ''
}

export default (state = initialState, {
  type,
  payload: {
    paragraphs = [],
    serviceId = '',
    name = ''
  } = {}
} = {}) => {
  switch (type) {
    case actionTypes.SET_PARAGRAPHS:
      return {
        paragraphs: [...paragraphs],
        serviceId,
        name
      }
    case actionTypes.CLEAR_PARAGRAPHS:
      return initialState
    default:
      return state
  }
}
