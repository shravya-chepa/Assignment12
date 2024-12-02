import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './Product';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Product />, document.getElementById('root'));

serviceWorker.unregister();
