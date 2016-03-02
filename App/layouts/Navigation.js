/**
 * Created by jason on 3/2/16.
 */
import React,{
	Component,
	PropTypes,
	Navigator,
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions
} from 'react-native'

import * as OAuth from './Oauth'
import connectComponet from '../utils/connectComponent'
import config from '../configs'
import Router from '../configs/Router';

const { height, width } = Dimensions.get('window')
const initialRoute = {
	name: 'Oauth',
	index: 0,
	component: connectComponet(OAuth)
}

class Navigation extends Component{
	// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
	renderScene({ component, name, props, id, index }, navigator) {

		this.router = this.router || new Router(navigator);
		if (component) {
			return React.createElement(component, {
				...props,
				ref: view => this[index] = view,
				router: this.router,
				route: {
					name,
					id,
					index
				}
			});
		}
	}


	configureScene(route) {
		if (route.sceneConfig) {
			return route.sceneConfig
		}
		return Navigator.SceneConfigs.FloatFromRight
	}

	render() {
		return (
			<Image
				source={{ uri: config.bgImgUri }}
				style={styles.bg}>
				<Navigator
					ref={view => this.navigator=view}
					initialRoute={initialRoute}
					configureScene={this.configureScene.bind(this)}
					renderScene={this.renderScene.bind(this)}/>
			</Image>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	flexCenter: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bg: {
		flex: 1,
		height,
		width,
		backgroundColor: 'transparent'
	}
});

export default Navigation