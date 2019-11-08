import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import SearchCom from '../../containers/components/SearchCom';
import { fetchPost } from '../../containers/utils/requestConfig';
import { appSignIn } from '../signin/navigation';

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSearch: [],
      usersFromServer: [],
      refreshing: false,
      keyword: '',
    };
  }
  componentDidMount() {
    this.refreshDataFromServer();
    SplashScreen.hide();
  }
  refreshDataFromServer = () => {
    const data = {
      token: '31bd05501a480dad1f4e830173bdc025ae8950b0',
    };
    this.setState({refreshing: true});
    fetchPost('/hapi/data/get/clients', data, null)
      .then(users => {
        this.setState({
          usersFromServer: users.result.clients,
          dataSearch: users.result.clients,
        });
        this.setState({refreshing: false});
      })
      .catch(error => {
        this.setState({usersFromServer: []});
        this.setState({refreshing: false});
      });
  };
  onRefresh = () => {
    this.refreshDataFromServer();
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({item, index}) => {
    return (
      <ListItem
        key={index}
        title={item.last}
        subtitle={item.email}
        bottomDivider
        onPress={this.onPressDetail}
      />
    );
  };
  onPressDetail = () => {
    appSignIn(this.props.componentId);
  };

  onSearch = keyword => {
    this.setState({
      keyword: keyword,
    });
  };

  render() {
    var {usersFromServer, keyword} = this.state;
    usersFromServer = usersFromServer.filter(user => {
      return user.last.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <View style={{marginTop: 40}}>
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
