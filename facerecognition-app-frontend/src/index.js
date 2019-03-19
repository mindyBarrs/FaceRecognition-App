import React from 'react';
import ReactDOM from 'react-dom';

// STYLESHEETS
import './index.css';
import 'tachyons';

// COMPONENTS
import App from './App';

// SERVICE WORKERS
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
