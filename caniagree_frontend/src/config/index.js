import { syncHistoryWithStore } from 'react-router-redux'
import { createHistory } from 'history'
import configureStore from './store'
import { setId, sampleDataAction } from '../actions'

const setup = (dispatch, { id }) => {
  dispatch(setId(id))
  dispatch(sampleDataAction())
}

const init = ({ ...params }) => {
  const history = createHistory()
  const store = configureStore(history)
  const syncedHistoryWithStore = syncHistoryWithStore(history, store)

  setup(store.dispatch, params)

  return {
    store,
    history: syncedHistoryWithStore
  }
}

export default init
