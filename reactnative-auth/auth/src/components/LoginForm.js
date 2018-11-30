import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }

    showError() {
        if (this.state.error !== '') {
            return (
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            );
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }

        return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
    }

    render() {
        return (
            <View>
             <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        onChangeText={text => this.setState({ password: text })}
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password}
                    />
                </CardSection>

                {this.showError()}

                <CardSection>{this.renderButton()}</CardSection>
            </Card>
            </View>
           
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
