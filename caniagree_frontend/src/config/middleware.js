import { applyMiddleware } from 'redux'
import middlewares from '../middlewares'

export default (...additionalMiddlewares) =>
  applyMiddleware(...middlewares, ...additionalMiddlewares)
