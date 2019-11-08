import { USER_KEY } from 'containers/utils/config';
import React from 'react';
import { AsyncStorage, Button, StyleSheet, TextInput, View } from 'react-native';
import { fetchPost } from '../../containers/utils/requestConfig';
import { rootHomeScreen } from '../home/navigation';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userFromServer: null,
    };
  }

  validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(this.state.email) === true) {
      return true;
    }
    return false;
  };

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

    const {email, password} = this.state;
    

    fetchPost('hapi/auth/login', loginData, null, true)
      .then(user => {
        if(user.error){
          alert("Sai tai khoan");
        } else {
          AsyncStorage.setItem(USER_KEY, 'test');
          rootHomeScreen(this.props.componentId);

        }
        
        
      })
      .catch(error => {
        this.setState({userFromServer: null});
      });
  };
  render() {
    const validation = this.validate();
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
