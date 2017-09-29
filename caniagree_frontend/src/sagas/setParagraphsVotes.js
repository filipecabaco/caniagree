import { call, put, fork, takeLatest } from 'redux-saga/effects'
import { UPVOTE_PARAGRAPH, DOWNVOTE_PARAGRAPH } from '../constants/action.types'
import {
  setParagraphUpvote,
  setParagraphDownvote
} from '../gateways/mocked/setParagraphVotesGateway'

export function* setParagraphsUpvotesSaga(
  action,
  gateway = setParagraphUpvote
) {
  const id = action.payload.id

  console.log(`Set upvote saga ${id}`)

  yield call(setParagraphUpvote, { id })
}

export function* setParagraphsDownvotesSaga(
  action,
  gateway = setParagraphDownvote
) {
  const id = action.payload.id

  console.log(`Set downvote saga ${id}`)

  yield call(setParagraphDownvote, { id })
}

export default function*() {
  yield fork(takeLatest, UPVOTE_PARAGRAPH, setParagraphsUpvotesSaga)
  yield fork(takeLatest, DOWNVOTE_PARAGRAPH, setParagraphsDownvotesSaga)
}
