import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './app/reducers/reducerCombine';
import MainContainer from "./app/container/MainContainer";

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).ready(()=>$(document).foundation);

const store= createStore(reducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
        <MainContainer/>
    </Provider>, document.getElementById('root'));
