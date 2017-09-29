import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const setRoute = actionCreator(actionTypes.SET_ROUTE)

export const upvoteParagraph = actionCreator(actionTypes.UPVOTE_PARAGRAPH)
export const downvoteParagraph = actionCreator(actionTypes.DOWNVOTE_PARAGRAPH)

export const toggleParagraphs = actionCreator(actionTypes.TOGGLE_PARAGRAPH)

export const getServices = actionCreator(actionTypes.GET_SERVICES)
export const getParagraphs = actionCreator(actionTypes.GET_PARAGRAPHS)

export const setServices = actionCreator(actionTypes.SET_SERVICES)
export const clearServices = actionCreator(actionTypes.CLEAR_SERVICES)

export const filterServices = actionCreator(actionTypes.FILTER_SERVICES)
export const clearFilter = actionCreator(actionTypes.CLEAR_FILTER)

export const setParagraphs = actionCreator(actionTypes.SET_PARAGRAPHS)
export const clearParagraphs = actionCreator(actionTypes.CLEAR_PARAGRAPHS)
