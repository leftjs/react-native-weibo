/**
 * Created by jason on 3/2/16.
 */
import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as oauthService from '../services/oauth'


export const getAccessToken = createAction(types.REQUEST_OAUTH2_ACCESSTOKEN, async (code) =>{
	return await oauthService.req.getAccessToken(code)

}
)