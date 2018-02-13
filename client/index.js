import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import store from '../client/store'

ReactDOM.render(
	<Provider store={store}>
		<div style={{height:'100vh',backgroundColor:'#fafafa'}}>
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
)
