import { fork } from 'redux-saga/effects'
import sampleData from './sampleData'

export default function*() {
  yield fork(sampleData)
}
