
import React from 'react';
import ReactDOM from 'react-dom';

// import './styles.scss';

import 'semantic-ui-css/semantic.css';

import App from './app';

const rootDiv = document.getElementById('reactapp');

ReactDOM.render(<App />, rootDiv);

if (module.hot) {
    console.log("Updating the site.");
    module.hot.accept();
}
