import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAhJdDXJT5yzA81sHN6W-djVvV0J_2npZA',
            authDomain: 'authentication-b8c3a.firebaseapp.com',
            databaseURL: 'https://authentication-b8c3a.firebaseio.com',
            projectId: 'authentication-b8c3a',
            storageBucket: 'authentication-b8c3a.appspot.com',
            messagingSenderId: '654174711763'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider
                store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
            >
                <Router />
            </Provider>
        );
    }
}

export default App;
