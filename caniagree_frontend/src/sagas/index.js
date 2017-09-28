import { fork } from 'redux-saga/effects'
import getServices from './getServices'

export default function*() {
  yield fork(getServices)
}
