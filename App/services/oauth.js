/**
 * Created by jason on 3/2/16.
 */
import * as requestService from './request'
import config from '../configs'
import qs from 'query-string'
import { getToken, setToken} from './token'


export const req = {
	getAccessToken: function (authCode) {
		var body = {
			'client_id': config.appKey,
			'client_secret': config.appSecret,
			'grant_type': {
				'code': authCode,
				'redirect_uri': config.callback
			}
		}

		return requestService.post(`/oauth2/access_token?client_id=${body.client_id}&client_secret=${body.client_secret}&redirect_uri=${body.grant_type.redirect_uri}&code=${body.grant_type.code}`,null).then(token =>{
			if(token) {
				setToken(token)
				return token
			}else {
				throw 'getAccessTokenFail'
			}
		})
	}
}