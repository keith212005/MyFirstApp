import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {styles} from './style';
import {CustomHeader} from '@components';
import {Quote} from '@api';
import {actionCreaters} from '@actions';

const Item = ({author, content, requestno}) => (
  <View>
    <Text style={styles.author}>Request No : {requestno}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.author}>- {author}</Text>
  </View>
);

class Tab5 extends React.Component {
  state = {quote: [], isFetching: false};

  componentDidMount() {
    this.getAllQuotes();
  }

  getAllQuotes() {
    Quote.getAllQuotes().then((result) => {
      this.setState((prev) => ({
        quote: prev.quote.push(...result),
        ...prev,
      }));
    });
  }

  renderItem = ({item}) => (
    <Item
      author={item.author}
      content={item.content}
      requestno={item.request}
    />
  );

  ItemSeparatorLine = () => <View style={styles.lineseperator} />;

  onRefresh() {
    this.setState({isFetching: true}, function () {
      this.getAllQuotes();
    });
    this.setState({quote: [], isFetching: false});
  }

  render() {
    const {quote} = this.state;
    const {insets} = this.props;
    return (
      <View style={styles.container(insets)}>
        <CustomHeader
          title="Tab 5 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />

        <FlatList
          data={quote}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.ItemSeparatorLine}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
        />
      </View>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    insets: state.setSafeAreaInsets.insets,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Tab5);
