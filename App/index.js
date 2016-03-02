/**
 * Created by jason on 3/2/16.
 */
import React, {
Component,
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Navigation from './layouts/Navigation'
const store = configureStore()

class App extends Component{
	render(){
		return (
			<Provider store={store}>
				<Navigation></Navigation>
			</Provider>
		)
	}
}

export default App