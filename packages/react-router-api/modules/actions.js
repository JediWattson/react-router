
export const CREATE_CONNECTION = '@@connection/CREATE_CONNECTION'
export const ON_MESSAGE = '@@connection/ON_MESSAGE'

export const onMessage = (data) => {
	return{type: ON_MESSAGE, payload: data}
}