import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default class SignInComponent extends React.Component {
  render() {
    return (
      <View>
        <Text style={{marginTop: 100}}>Sign In</Text>
        {/* <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go Back"
        /> */}
      </View>
    );
  }
}
