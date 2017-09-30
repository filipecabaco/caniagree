import * as actionTypes from '../constants/action.types'
import { getControversialParagraphs } from '../util/paragraph.utils'

const initialState = {
  paragraphs: [],
  filteredParagraphs: [],
  totalFilteredParagraphs: 0,
  serviceId: '',
  name: ''
}

const MIN_DOWN_VOTES = 900

export default (state = initialState, {type, payload: {isToggled, paragraphs, serviceId, name, id, totalFilteredParagraphs = 0} = {}} = {}) => {
  switch (type) {
    case actionTypes.SET_PARAGRAPHS:
      return {
        paragraphs: [...paragraphs],
        filteredParagraphs: [...paragraphs],
        serviceId,
        name,
        totalFilteredParagraphs
      }
    case actionTypes.TOGGLE_PARAGRAPH:
      const stateparagraphs = state.paragraphs
      const filtered = getControversialParagraphs(stateparagraphs)

      return {
        paragraphs: stateparagraphs,
        filteredParagraphs: isToggled ? filtered : stateparagraphs,
        serviceId: state.serviceId,
        name: state.name,
        totalFilteredParagraphs: isToggled ? stateparagraphs.length : filtered.length
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
