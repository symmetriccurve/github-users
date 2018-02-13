import {
	GET_USERS
} from '../actionTypes/apiTypes'

export function getUsers(input){
	return dispatch => {
		fetch(`https://api.github.com/search/users?q=${input}`)
			.then((response) => response.json())
			.then((json) => {
				dispatch({type: GET_USERS, payload: json})
			})
			.catch((error)=>{
				console.error(error)
			})
	}
}
