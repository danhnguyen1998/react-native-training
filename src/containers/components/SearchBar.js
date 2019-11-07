import React from 'react';
import { SearchBar } from 'react-native-elements';
export default class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  updateSearch = keyword => {
    this.setState({keyword});
    this.props.onSearch(this.state.keyword);
  };


  render() {
    const {keyword} = this.state;

    return (
      <SearchBar
        placeholder="Type here..."
        onChangeText={this.updateSearch}
        value={keyword}
        onSearch={this.props.onSearch}
      />
    );
  }
}
