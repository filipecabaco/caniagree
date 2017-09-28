import { createStore, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducer'
import createMiddleware from './middleware'
import sagas from '../sagas'

function enableHotReload(store) {
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer())
    })
  }
}

function configureStore(history) {
  const additionalReducers = {
    routing: routerReducer
  }

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    createReducer(additionalReducers),
    undefined,
    compose(
      createMiddleware(routerMiddleware(history), sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  enableHotReload(store)

  store.runSaga = sagaMiddleware.run
  store.runSaga(sagas)

  return store
}

export default configureStore
