import * as actionTypes from '../constants/action.types'

const initialState = {
  paragraphs: [],
  filteredParagraphs: [],
  serviceId: '',
  name: ''
}

const MIN_DOWN_VOTES = 900

export default (state = initialState, {type, payload: {isToggled, paragraphs, serviceId, name, id} = {}} = {}) => {
  switch (type) {
    case actionTypes.SET_PARAGRAPHS:
      return {
        paragraphs: [...paragraphs],
        filteredParagraphs: [...paragraphs],
        serviceId,
        name
      }
    case actionTypes.TOGGLE_PARAGRAPH:
      const filtered = isToggled
        ? state.paragraphs.filter((p) => p.down_vote > MIN_DOWN_VOTES)
        : state.paragraphs

      return {
        paragraphs: state.paragraphs,
        filteredParagraphs: filtered,
        serviceId: state.serviceId,
        name: state.name
      }
    case actionTypes.UPVOTE_PARAGRAPH:
      return {
        ...state,
        paragraphs: state.paragraphs.map((paragraph) => {
          if (paragraph.id === id) {
            paragraph.up_vote++
          }

          return paragraph
        })
      }
    case actionTypes.DOWNVOTE_PARAGRAPH:
      return {
        ...state,
        paragraphs: state.paragraphs.map((paragraph) => {
          if (paragraph.id === id) {
            paragraph.down_vote++
          }

          return paragraph
        })
      }
    case actionTypes.CLEAR_PARAGRAPHS:
      return initialState
    default:
      return state
  }
}
