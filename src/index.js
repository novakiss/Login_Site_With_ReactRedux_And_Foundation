import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './app/reducers/reducerCombine';
import Main from "./app/components/Main";

const store= createStore(reducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>, document.getElementById('root'));
