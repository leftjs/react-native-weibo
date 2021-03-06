/**
 * Created by jason on 3/2/16.
 */
import React,{
	Navigator
} from 'react-native'

import _ from 'lodash'
import connectComponent from '../utils/connectComponent'
import * as CustomSceneConfigs from '../configs/sceneConfig';
import * as Home from '../layouts/Home'
class Router {
	// 构造
  constructor(props) {
	  this.navigator = props
  }

	push(props = {}, route) {
		let routesList = this.navigator.getCurrentRoutes()
		let nextIndex = routesList[routesList.length - 1].index + 1
		route.props = props
		route.index = nextIndex
		route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight
		route.id = _.uniqueId()
		route.component = connectComponent(route.component)
		this.navigator.push(route)
	}

	pop(){
		this.navigator.pop()
	}

	toHome(props) {
		this.push(props, {
			component: Home,
			name: 'Home',
			sceneConfig: CustomSceneConfigs.customFloatFromRight

		})
	}
}

export default Router