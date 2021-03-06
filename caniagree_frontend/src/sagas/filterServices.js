import { select, put, takeLatest } from 'redux-saga/effects'
import { setRoute } from '../actions'
import { FILTER_SERVICES } from '../constants/action.types'

export function* filterServicesSaga ({
  payload: {
    force = false,
    term = ''
  } = {}
} = {}) {
  const services = yield select(({services}) =>
    services.filter(({name}) => name.toLowerCase().includes(term.toLowerCase())))

  if (force && services.length === 1) {
    yield put(setRoute({path: 'service/' + services[0].id}))
  } else {
    yield put(setRoute({path: `/?q=${term}`}))
  }
}

export default function*() {
  yield takeLatest(FILTER_SERVICES, filterServicesSaga)
}
