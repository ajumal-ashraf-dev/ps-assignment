import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import './index.css';
import FrontPage from './pages/FrontPage';
import newsReducer from './store/reducers/news';

const rootReducer = combineReducers({
    news: newsReducer
});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/page/:page" component={FrontPage}/>
                    <Route component={FrontPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);