/**
 * Created by jason on 3/2/16.
 */
import React,{
	Component,
	View,
	Text,
	WebView,
	PropTypes,
	Dimensions,
	StyleSheet
} from 'react-native'

import config from '../configs'
import qs from 'query-string'
import connectComponent from '../utils/connectComponent'
import Spinner from '../components/base/Spinner'

const { width, height } = Dimensions.get('window')

class Oauth extends Component {

	// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
	    hidden: false
    };
  }

	componentWillMount() {
	}

	navigationChange(navState){
		let url = navState.url
		let regex = 'code='
		let start = url.indexOf(regex)
		if(start > -1 && navState.loading){
			let code = url.substring(start + regex.length,url.length)
			this.hidden = true
			this.props.router.toHome()
			this.props.actions.getAccessToken(code)
		}
	}

	_onShouldStartLoadWithRequest(nav){
		if (this.hidden) {
			return false
		}
		return true
	}


	_renderSpinner(){
		return (
			<Spinner
				size="small"
				style={styles.loading}
			></Spinner>
		)
	}


	_renderWebView(){

		return (

			<WebView
				ref={webview => this.webview = webview}
				source={{uri: config.domain + `/oauth2/authorize?client_id=${config.appKey}&redirect_uri=${config.callback}`}}
				automaticallyAdjustContentInsets={false}
				bounces={false}
				style={{width: width, height: height}}
				contentInset={{top:0, bottom:0, left: 0, right: 0}}
				onNavigationStateChange={this.navigationChange.bind(this)}
				onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}
			>
			</WebView>

		)

	}

	render(){
		return (
		<View>
			{this._renderWebView()}
		</View>
		)
		}

}

const styles = StyleSheet.create({
	loading: {
		marginTop: 20
	}
})

export const LayoutComponent = Oauth
export function mapStateToProps(state,props) {
	return{

	}
}

