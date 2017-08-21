export default function listenerMiddleware() {
  return () => next => action => {
		next(action)
  }
}
