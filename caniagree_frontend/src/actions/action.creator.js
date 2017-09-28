import isPlainObject from 'is-plain-object'

const identity = t => t

export const PayloadError = type =>
  new Error(
    `${type} - final payload must be a plain object, error or undefined`
  )
export const ActionTypeError = new Error('Action Type must be a string')
export const ActionPayloadError = new Error(
  'Action Payload creator must be a function'
)

const actionCreator = (type, payloadCreator = identity) => {
  if (typeof payloadCreator !== 'function') {
    throw ActionPayloadError
  }
  if (typeof type !== 'string') {
    throw ActionTypeError
  }

  return (...args) => {
    const action = {
      type
    }

    const payload = payloadCreator(...args)

    if (payload !== undefined) {
      if (isPlainObject(payload) || payload instanceof Error) {
        action.payload = payload
      } else {
        action.payload = {}
      }
    }

    return action
  }
}

export default actionCreator
