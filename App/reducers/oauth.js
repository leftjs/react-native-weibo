/**
 * Created by jason on 3/2/16.
 */


import * as types from '../constants/ActionTypes'
const initialState = {
}


export default function (state = initialState, action ) {
	const { payload, error, type, meta={} }  = action
	const { sequence={} } = meta
	switch (type){
		case types.REQUEST_OAUTH2_ACCESSTOKEN:
			return {
				...state,
				access_token: payload
			}
		default:
			return state
	}
}