import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

export default class ScreenComponent extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ marginTop: 100 }}>Detail Contact</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title="Go Back"
                />
            </View>
        );
    }
}
