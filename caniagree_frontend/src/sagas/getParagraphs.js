import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_PARAGRAPHS } from '../constants/action.types'
import { setParagraphs } from '../actions'
import { sampleParagraphsDataGateway } from '../gateways/mocked/sampleData'

export function* getParagraphsSaga (action, gateway = sampleParagraphsDataGateway) {
  const serviceId = action.payload.id

  const { paragraphs, name } = yield call(gateway, serviceId)

  yield put(setParagraphs({paragraphs, name, serviceId}))
}

export default function*() {
  yield takeLatest(GET_PARAGRAPHS, getParagraphsSaga)
}
