import { GET_USERS } from '../actionTypes/apiTypes'

var defaulteState  = {
	users: []
}

function dataReducer(state = defaulteState, action) {
	switch (action.type) {
	case GET_USERS:
		return Object.assign({},state,{users:action.payload})
	default:
	}
	return state
}

module.exports = dataReducer
