import React from 'react';
import {
  View,
  Text,
  BackHandler,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import {RadioButton} from 'react-native-paper';
import * as RNLocalize from 'react-native-localize';
import {I18n} from '@languages';

import {styles} from './style';

const DATA = [
  {
    title: I18n.t('ChangeLanguage'),
  },
  {
    title: 'Other settings',
  },
];

const Item = ({title}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

export default class Setting extends React.Component {
  ItemSeparator = () => <View style={styles.itemSeparator} />;

  handleLocalizationChange() {
    console.log(RNLocalize.getLocales());
  }

  handleValue = (language) => {
    this.setState({selectedLanguage: language});
  };

  handleOnPress = (title) => {
    console.log(title);
    this.props.navigation.navigate('Language');
  };

  renderItem = ({item}) => (
    <TouchableHighlight
      style={styles.renderItemContainer}
      onPress={() => this.handleOnPress(item.title)}>
      <Item title={item.title} />
    </TouchableHighlight>
  );

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.screenTitle}>{I18n.t('Setting')}</Text>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={this.ItemSeparator}
          />
        </View>
      </>
    );
  }
}
