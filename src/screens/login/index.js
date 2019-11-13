import AsyncStorage from '@react-native-community/async-storage';
import SelectRoleModal from 'containers/components/SelectRoleModal';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { USER_KEY, USER_LOGIN } from '../../containers/constant/index';
import { fetchPost } from '../../containers/utils/requestConfig';
import { rootHomeScreen } from '../home/navigation';
import { logInAction } from './redux/actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userFromServer: null,
        };
    }

    signIn = async () => {
        const loginData = {
            device_info: {
                device: {},
                isWebView: false,
                isIPad: false,
                isIOS: true,
                isAndroid: false,
                isWindowsPhone: false,
                currentPlatform: 'ios',
                currentPlatformVersion: 11,
            },
            device_token: 'K481992636',
            email: this.state.email,
            password: this.state.password,
            remember_me: 1,
        };

        fetchPost('hapi/auth/login', loginData, null, true)
            .then(user => {
                if (user.error) {
                    alert('Invalid email or password!');
                } else {
                    AsyncStorage.setItem(USER_KEY, user.result.token);
                    AsyncStorage.setItem(USER_LOGIN, JSON.stringify(user.result.user));
                    rootHomeScreen(this.props.componentId);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    signUp = () => {
        this.refs.selectRoleModal.showRoleModal();
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    placeholderTextColor="white"
                    onChangeText={text => {
                        this.setState({
                            email: text,
                        });
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor="white"
                    onChangeText={text => {
                        this.setState({
                            password: text,
                        });
                    }}
                />
                <Button
                    title="Sign In"
                    onPress={this.signIn}
                // disabled={validation === true ? false : true}
                />
                <Button
                    title="Sign Up"
                    onPress={this.signUp}
                // disabled={validation === true ? false : true}
                />
                <SelectRoleModal ref={'selectRoleModal'}></SelectRoleModal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapDispatchToProps = dispatch => bindActionCreators({ logInAction }, dispatch);
export default connect(
    null,
    mapDispatchToProps
)(Login);