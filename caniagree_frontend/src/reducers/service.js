import * as actionTypes from '../constants/action.types'
import { getControversialParagraphs } from '../utils/paragraph.utils'

const initialState = {
  paragraphs: [],
  filteredParagraphs: [],
  serviceId: '',
  name: ''
}

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

    case actionTypes.TOGGLE_PARAGRAPH: {
      const filtered = payload.isToggled
        ? getControversialParagraphs(state.paragraphs)
        : state.paragraphs

      return {
        paragraphs: state.paragraphs,
        filteredParagraphs: filtered,
        serviceId: state.serviceId,
        name: state.name
      }
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
