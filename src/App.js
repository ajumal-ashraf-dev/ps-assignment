import path from 'path';
import fs from 'fs';

import Express from 'express';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'

import newsReducer from './store/reducers/news';
import FrontPage from './pages/FrontPage';

const app = Express();
const PORT = 3000;

app.use(handleRender);

function handleRender(req, res) {
    const rootReducer = combineReducers({
        news: newsReducer
    });
    const store = createStore(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <FrontPage />
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
}

app.listen(PORT);