import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class ScreenComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        //var base64Icon = `data:image/png;base64,${this.props.base64}`;
        return (
            <View style={styles.container}>
                <Image style={{ width: 480, height: 600 }} source={{ uri: this.props.uri }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    name: {
        fontSize: 30,
        color: 'grey',
        justifyContent: 'center'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});