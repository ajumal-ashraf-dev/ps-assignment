import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import FrontPage from './pages/FrontPage';
import newsReducer from './store/reducers/news';

const rootReducer = combineReducers({
    news: newsReducer
});

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(rootReducer, preloadedState)

ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <FrontPage />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
