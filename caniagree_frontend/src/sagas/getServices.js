import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_SERVICES } from '../constants/action.types'
import { setServices } from '../actions'
import {getServices} from '../gateways/services'

export function* getServicesSaga (action) {
  const { services } = yield call(getServices)

  yield put(setServices({services}))
}

export default function*() {
  yield takeLatest(GET_SERVICES, getServicesSaga)
}
