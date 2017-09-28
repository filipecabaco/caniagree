import * as actionTypes from '../constants/action.types'
import actionCreator from './action.creator'

export const setId = actionCreator(actionTypes.SET_ID, id => ({ id }))

export const buttonClicked = actionCreator(actionTypes.BUTTON_CLICKED)

export const sampleDataAction = actionCreator(actionTypes.SAMPLE_DATA_ACTION)
