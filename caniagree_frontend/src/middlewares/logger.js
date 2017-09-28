export default store => next => action => {
  next(action)

  console.log(`dispatching: ${JSON.stringify(action)}`)
}
