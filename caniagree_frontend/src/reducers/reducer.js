import * as actionTypes from '../constants/action.types'

const initialState = {
  id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ID:
      return {
        ...state,
        id: action.payload.id
      }
    case actionTypes.BUTTON_CLICKED: {
      console.log('Reducer: The button was clicked!')
      return state
    }
    default:
      return state
  }
}
