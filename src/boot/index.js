import InternetError from 'containers/components/internetError';
import LoadingComponent from 'containers/components/loading';
import { logErrorAction } from 'containers/redux/common/actions';
import React, { Fragment } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const innitState = {
  errorMessShow: null,
};

class RootComponent extends React.Component {
  state = innitState;

  static getDerivedStateFromProps(nextProps, prevState) {
    let objChange = {};
    if (nextProps.isConnected !== prevState.isConnected) {
      objChange.isConnected = nextProps.isConnected;
    }
    if (nextProps.errorMessShow !== prevState.errorMessShow) {
      objChange.errorMessShow = nextProps.errorMessShow;
    }
    return Object.keys(objChange).length === 0 ? null : objChange;
  }

  closeErr = () => this.props.logErrorAction(null, null);

  render() {
    const {errorMessShow} = this.state;
    return (
      <Fragment>
        {this.props.children}
        <InternetError />
        <LoadingComponent />
        {!errorMessShow ||
          Alert.alert('Lỗi', errorMessShow, [
            {text: 'OK', onPress: this.closeErr, style: 'cancel'},
          ])}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errorMessShow: state.common.errorMessShow,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({logErrorAction}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootComponent);
