import CameraRoll from "@react-native-community/cameraroll";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { appImageScreen } from '../image/navigation';

export default class ServiceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: RNCamera.Constants.Type.back,
            base64String: '',
        };
    }

    flipCamera = () => {
        this.setState({
            type:
                this.state.type === RNCamera.Constants.Type.back
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back,
        });
    }

    takePicture = async () => {
        const options = {
            quality: 1.0,
            base64: true,
            width: 1920,
            height: 1080,
        };
        const data = await this.camera.takePictureAsync(options);
        CameraRoll.saveToCameraRoll(data.uri, 'photo');
        appImageScreen(this.props.componentId, data);
    };
    render() {
        const { type } = this.state;
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={type}
                    flashMode={RNCamera.Constants.FlashMode.off}
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });