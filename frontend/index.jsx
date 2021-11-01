import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    // for testing
    window.login = login;
    window.signin = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // 


    ReactDOM.render(<Root store={store}/>, root);
})
