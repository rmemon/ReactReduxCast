import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import { store } from './store';
import reducers from './reducers';

ReactDOM.render(
	<Provider store={store(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));