import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import csStyles from "./styles";

class InternetErrorComponent extends React.Component {
  render() {
    return (
      <Modal visible={!this.props.isConnected} animationType="slide" transparent={true}>
        <View style={csStyles.view_disconnect}>
          <View>
            <ActivityIndicator size="large" color="blue" />
            <Text style={csStyles.txt_disconnect}>Connecting...</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  isConnected: state.network.isConnected
});

export default connect(mapStateToProps)(InternetErrorComponent);
