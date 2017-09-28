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

export const getServices = actionCreator(actionTypes.GET_SERVICES)

export const addServices = actionCreator(actionTypes.ADD_SERVICES, services => ({services}))
export const clearServices = actionCreator(actionTypes.CLEAR_SERVICES)

export const filterServices = actionCreator(actionTypes.FILTER_SERVICES, term => ({term}))
export const clearFilter = actionCreator(actionTypes.CLEAR_FILTER)
