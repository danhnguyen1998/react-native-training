import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {

        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.name}>{this.props.full_name}</Text>
                    </View>
                    <View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Cell Phone:</Text>
                            <Text style={styles.detailData}>{this.props.phone1}</Text>
                        </View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Email:</Text>
                            <Text style={styles.detailData}>{this.props.email}</Text>
                        </View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>State</Text>
                            <Text style={styles.detailData}>
                                {this.props.city},{" "}
                                {this.props.state}{" "}</Text>
                        </View>
                    </View>
                </View>
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