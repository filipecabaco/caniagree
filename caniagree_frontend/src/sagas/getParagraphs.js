import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PARAGRAPHS } from '../constants/action.types'
import { setParagraphs } from '../actions'
import {getParagraphs} from '../gateways/services'

export function* getParagraphsSaga (action) {
  const serviceId = action.payload.id

  const { paragraphs, name } = yield call(getParagraphs, serviceId)

  yield put(setParagraphs({paragraphs, name, serviceId}))
}

export default function*() {
  yield takeLatest(GET_PARAGRAPHS, getParagraphsSaga)
}
