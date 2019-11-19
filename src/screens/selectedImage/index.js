import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

export default class SelectedImageComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        let photos = this.props;
        return (
            <View style={styles.container}>
                <ScrollView>
                    {photos.map((p, i) => {
                        return (
                            <Image
                                style={{
                                    width: 300,
                                    height: 300,
                                }}
                                source={{ uri: p[i].node.image.uri }}
                            />
                        );
                    })}
                </ScrollView>
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