import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import {
    StaticRouter,
    Switch,
    Route
} from "react-router-dom";

import newsReducer from './store/reducers/news';
import FrontPage from './pages/FrontPage';
import * as newsActions from './store/actions/news';

const app = express();
const router = express.Router();
const PORT = 3000;

function handleRender(req, res) {
    const rootReducer = combineReducers({
        news: newsReducer
    });
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const page = req.params.page || 0;
    store.dispatch(newsActions.getNews(page))
    .then(function() {
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter>
                    <Switch>
                        <Route exact path="/page/:page">
                            <FrontPage />
                        </Route>
                    </Switch>
                </StaticRouter>
            </Provider>
        );
    
        const preloadedState = store.getState();
    
        fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return res.status(500).send('An error occurred')
            }
            return res.send(
                data.replace(
                    '<div id="root"></div>',
                    `<div id="root">${html}</div>
                    <script>
                        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                            /</g,
                            '\\u003c'
                        )}
                    </script>    
                    `
                )
            );
        });
    })
}
router.use('^/$', (req, res) => {
    res.redirect('/page/0');
})
router.use('^/page/:page$', handleRender)
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

app.use(router)

app.listen(PORT);