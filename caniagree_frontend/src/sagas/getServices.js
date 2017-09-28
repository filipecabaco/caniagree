import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_SERVICES } from '../constants/action.types'
import { addServices } from '../actions'
import { sampleDataGateway } from '../gateways/mocked/sampleData'

export function* getServicesSaga (action, gateway = sampleDataGateway) {
  const { services } = yield call(gateway)

  yield put(addServices(services))
}

export default function*() {
  yield takeLatest(GET_SERVICES, getServicesSaga)
}
