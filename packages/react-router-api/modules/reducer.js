import { CREATE_CONNECTION, ON_MESSAGE } from './actions'

export function listenerReducer(state = {}, {type, payload} = {}){
	if(type === CREATE_CONNECTION)
		return Object.assign({}, state, {c : payload})
	if(type === ON_MESSAGE){
		return Object.assign({}, state, {onMessage: payload.data})
	}
	return state
}