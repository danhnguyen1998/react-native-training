import React from "react";
import { ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";
import csStyles from "./styles";

class LoadingComponent extends React.PureComponent {
  render() {
    const { isLoading } = this.props;
    return (
      !isLoading || (
        <View style={csStyles.view_loading}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.common.isLoading
});

export default connect(mapStateToProps)(LoadingComponent);
