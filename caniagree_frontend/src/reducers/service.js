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

export default (
  state = initialState,
  {
    type,
    payload: {
      isToggled,
      paragraphs,
      serviceId,
      name,
      id,
      totalFilteredParagraphs = 0
    } = {}
  } = {}
) => {
  switch (type) {
    case actionTypes.SET_PARAGRAPHS:
      const originalFiltered = getControversialParagraphs(paragraphs)
      return {
        paragraphs: [...paragraphs],
        filteredParagraphs: [...paragraphs],
        serviceId,
        name,
        totalFilteredParagraphs: originalFiltered.length
      }
    case actionTypes.TOGGLE_PARAGRAPH:
      const stateparagraphs = state.paragraphs
      const filtered = getControversialParagraphs(stateparagraphs)

      return {
        paragraphs: stateparagraphs,
        filteredParagraphs: isToggled ? filtered : stateparagraphs,
        serviceId: state.serviceId,
        name: state.name,
        totalFilteredParagraphs: isToggled
          ? stateparagraphs.length
          : filtered.length
      }
    case actionTypes.UPVOTE_PARAGRAPH:
      const stateParagraphsUp = state.paragraphs.map(paragraph => {
        if (paragraph.id === id) {
          paragraph.up_vote++
        }

        return paragraph
      })

      const filteredUp = getControversialParagraphs(stateParagraphsUp)

      return {
        ...state,
        filteredParagraphs: isToggled ? filteredUp : stateParagraphsUp,
        totalFilteredParagraphs: isToggled
          ? stateParagraphsUp.length
          : filteredUp.length,
        paragraphs: stateParagraphsUp
      }
    case actionTypes.DOWNVOTE_PARAGRAPH:
      const stateParagraphsDown = state.paragraphs.map(paragraph => {
        if (paragraph.id === id) {
          paragraph.down_vote++
        }

        return paragraph
      })

      const filteredDown = getControversialParagraphs(stateParagraphsDown)

      return {
        ...state,
        filteredParagraphs: isToggled ? filteredDown : stateParagraphsDown,
        totalFilteredParagraphs: isToggled
          ? stateParagraphsDown.length
          : filteredDown.length,
        paragraphs: stateParagraphsDown
      }
    case actionTypes.CLEAR_PARAGRAPHS:
      return initialState
    default:
      return state
  }
}
