import * as actionTypes from '../constants/action.types'

const initialState = {
  paragraphs: [],
  filteredParagraphs: [],
  serviceId: '',
  name: ''
}

const MIN_DOWN_VOTES = 900

export default (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case actionTypes.SET_PARAGRAPHS: {
      const { paragraphs, serviceId, name } = payload
      return {
        paragraphs: [...paragraphs],
        filteredParagraphs: [...paragraphs],
        serviceId,
        name
      }
    }

    case actionTypes.CLEAR_PARAGRAPHS:
      return initialState

    case actionTypes.TOGGLE_PARAGRAPH: {
      const filtered = payload.isToggled 
        ? state.paragraphs.filter((p) => p.down_vote > MIN_DOWN_VOTES)
        : state.paragraphs

      return {
        paragraphs: state.paragraphs,
        filteredParagraphs: filtered,
        serviceId: state.serviceId,
        name: state.name
      }
    }

    default: 
      return state
  }
}
