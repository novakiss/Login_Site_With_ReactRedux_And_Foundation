import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from "./helper/store";

import MainContainer from "./app/main/container/MainContainer";

require('./App.css');
require('foundation-sites/dist/css/foundation.min.css');

ReactDOM.render(
    <Provider store={store}>
        <MainContainer/>
    </Provider>, document.getElementById('root'));