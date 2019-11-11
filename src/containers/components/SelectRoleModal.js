import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');

export default class SelectRoleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        };
    }
    showRoleModal = () => {
        this.refs.selectRoleModal.open();
    };
    render() {
        return (
            <View>
                <Modal
                    ref={'selectRoleModal'}
                    position="center"
                    style={{
                        justifyContent: 'center',
                        borderRadius: Platform.OS === 'ios' ? 30 : 0,
                        shadowRadius: 10,
                        width: screen.width - 80,
                        height: 280,
                    }}
                    backdrop={true}
                    onClosed={() => {
                        // alert("Modal closed");
                    }}>
                    <Text>Please select account type to sign up</Text>
                    <Button title="I am a Trainer" />
                    <Button title="I am a Client of a Trainer" />
                </Modal>
            </View>
        );
    }
}
