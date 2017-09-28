import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const setId = actionCreator(actionTypes.SET_ID, id => ({ id }))

export const upvoteParagraph = actionCreator(
  actionTypes.UPVOTE_PARAGRAPH,
  id => ({ id })
)
export const downvoteParagraph = actionCreator(
  actionTypes.DOWNVOTE_PARAGRAPH,
  id => ({ id })
)

export const sampleDataAction = actionCreator(actionTypes.SAMPLE_DATA_ACTION)
