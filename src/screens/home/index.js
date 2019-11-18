import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { Alert, FlatList, RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchCom from '../../containers/components/SearchCom';
import { fetchPost } from '../../containers/utils/requestConfig';
import { appLoginScreen } from '../login/navigation';
import { appScreen } from '../screen2/navigation';
import { fetchUsersAction } from './redux/actions';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: [],
            usersFromServer: [],
            refreshing: false,
            keyword: '',
        };
    }
    componentWillUnmount() {
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }
    componentDidMount() {
        //this.props.fetchUsersAction();
        this.navigationEventListener = Navigation.events().bindComponent(this);
        this.refreshDataFromServer();
        SplashScreen.hide();
    }
    refreshDataFromServer = () => {
        const data = {
            token: '31bd05501a480dad1f4e830173bdc025ae8950b0',
        };
        this.setState({ refreshing: true });
        fetchPost('hapi/data/get/clients', data, null)
            .then(users => {
                this.setState({
                    usersFromServer: users.result.clients,
                    dataSearch: users.result.clients,
                });
                this.setState({ refreshing: false });
            })
            .catch(error => {
                this.setState({ usersFromServer: [] });
                this.setState({ refreshing: false });
            });
    };
    navigationButtonPressed({ buttonId }) {
        if (buttonId == 'logoutButton') {
            this.logout();
        }
        if (buttonId == 'backButton') {
            Navigation.pop(this.props.componentId);
        }
    }

    onRefresh = () => {
        this.refreshDataFromServer();
    };
    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.full_name}
                subtitle={item.email}
                bottomDivider
                onPress={() => {
                    appScreen(this.props.componentId, item);
                }}
            />
        );
    };

    onSearch = keyword => {
        this.setState({
            keyword: keyword,
        });
    };

    logout = () => {
        Alert.alert(
            'Logout',
            'Do you want to log out?',
            [
                {
                    text: 'Remember me',
                    onPress: () => appLoginScreen(this.props.componentId),
                },

                {
                    text: "Don't remember me!",
                    onPress: () => {
                        AsyncStorage.clear();
                        appLoginScreen(this.props.componentId);
                    },
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel'),
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
    };

    render() {
        var { usersFromServer, keyword } = this.state;
        usersFromServer = usersFromServer.filter(user => {
            return user.last.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        return (
            <View style={{ marginTop: 40 }}>
            
                <SearchCom onSearch={this.onSearch} />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={usersFromServer}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchUsersAction }, dispatch);

export default connect(
    null,
    mapDispatchToProps,
)(HomeComponent);