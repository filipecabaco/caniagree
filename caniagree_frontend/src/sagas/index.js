import { fork } from 'redux-saga/effects'
import getParagraphs from './getParagraphs'
import getServices from './getServices'

export default function*() {
  yield fork(getParagraphs)
  yield fork(getServices)
}
