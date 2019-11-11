import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { USER_KEY } from '../../containers/constant/index';
import { rootHomeScreen } from '../home/navigation';
import { appLoginScreen } from '../login/navigation';

export default class Initializing extends React.Component {
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY);
            console.log('user: ', user);
            if (user) {
                rootHomeScreen();
            } else {
                appLoginScreen();
            }
        } catch (err) {
            console.log('error: ', err);
            appLoginScreen();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
