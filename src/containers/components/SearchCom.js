import React from 'react';
import { TextInput } from 'react-native';

export default class SearchCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        };
    }

    updateSearch = keyword => {
        this.props.onSearch(this.state.keyword);
        this.setState({
            keyword: keyword
        });
    };

    render() {
        const { keyword } = this.state;
        return (
            <TextInput
                placeholder="Type here..."
                onChangeText={this.updateSearch}
                value={keyword}
                onSearch={this.props.onSearch}
            />
        );
    }
}
