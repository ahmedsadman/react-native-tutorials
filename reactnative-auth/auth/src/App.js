import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    constructor() {
        super();
        this.state = { loggedIn: null };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAhJdDXJT5yzA81sHN6W-djVvV0J_2npZA',
            authDomain: 'authentication-b8c3a.firebaseapp.com',
            databaseURL: 'https://authentication-b8c3a.firebaseio.com',
            projectId: 'authentication-b8c3a',
            storageBucket: 'authentication-b8c3a.appspot.com',
            messagingSenderId: '654174711763'
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
