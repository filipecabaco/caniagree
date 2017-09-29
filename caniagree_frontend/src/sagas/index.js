import { fork } from 'redux-saga/effects'
import getParagraphs from './getParagraphs'
import filterServices from './filterServices'
import getServices from './getServices'

export default function*() {
  yield fork(getParagraphs)
  yield fork(filterServices)
  yield fork(getServices)
}
