import React from 'react';
import ReactDOM from 'react-dom';import './index.css';
import AppRouter from './AppRouter';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';
import reducer from './app/reducers/reducerCombine';

const store= createStore(reducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//store.dispatch({type:'LOG_IN',username:'khoapham'});
/*
store.dispatch({type:'LOG_IN',username:'khoapham'});
console.log(store.getState());
store.dispatch({type:'LOG_OUT'});
console.log(store.getState());
*/
ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>, document.getElementById('root'));
