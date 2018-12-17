import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
    tracks: [
        "aq",
        "bq"
    ],
    playlist: [
        "s",
        "x"
    ]
}

function playlist(state = initialState, action) {
    if (action.type === "ADD_TRACK") {
        return {
          ...state,
          tracks: [...state.tracks,action.playload]  
        };
    }
    return state
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
