import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import '../style/style.scss';


ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}