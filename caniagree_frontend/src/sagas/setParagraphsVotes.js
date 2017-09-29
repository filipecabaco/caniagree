import { call, fork, takeLatest } from 'redux-saga/effects'
import { UPVOTE_PARAGRAPH, DOWNVOTE_PARAGRAPH } from '../constants/action.types'
import {paragraphUpVote, paragraphDownVote} from '../gateways/services'

export function* setParagraphsUpvotesSaga (action) {
  const id = action.payload.id

  console.log(`Set upvote saga ${id}`)

  yield call(paragraphUpVote, id)
}

export function* setParagraphsDownvotesSaga (action) {
  const id = action.payload.id

  console.log(`Set downvote saga ${id}`)

  yield call(paragraphDownVote, id)
}

export default function*() {
  yield fork(takeLatest, UPVOTE_PARAGRAPH, setParagraphsUpvotesSaga)
  yield fork(takeLatest, DOWNVOTE_PARAGRAPH, setParagraphsDownvotesSaga)
}
