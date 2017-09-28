import { call, takeLatest } from 'redux-saga/effects'
import { SAMPLE_DATA_ACTION } from '../constants/action.types'
import { sampleDataGateway } from '../gateways/mocked/sampleData'

export function* sampleDataActionSaga(action, gateway = sampleDataGateway) {
  const { sampleData } = yield call(gateway)

  console.log('Sample Data Saga Action!!!!', sampleData)
}

export default function*() {
  yield takeLatest(SAMPLE_DATA_ACTION, sampleDataActionSaga)
}
