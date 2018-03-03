
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './styles.scss';

const rootDiv = document.getElementById('reactapp');

ReactDOM.render(<App />, rootDiv)

if (module.hot) {
	module.hot.accept();
}
