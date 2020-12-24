import React from 'react';
import {View, Text, BackHandler, FlatList} from 'react-native';

import I18n, {getLanguages} from 'react-native-i18n';
import {RadioButton} from 'react-native-paper';

import {styles} from './style';

const DATA = [
  {
    id: '1',
    title: 'English',
  },
  {
    id: '2',
    title: 'Hindi',
  },
  {
    id: '3',
    title: 'French',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class Setting extends React.Component {
  state = {selectedLanguage: null};

  handleValue = (language) => {
    this.setState({selectedLanguage: language});
  };

  renderItem = ({item}) => (
    <View style={styles.renderItemContainer}>
      <Item title={item.title} />
      <RadioButton.Group
        onValueChange={(newValue) => this.handleValue(newValue)}
        value={this.state.selectedLanguage}>
        <RadioButton value={item.title} />
      </RadioButton.Group>
    </View>
  );

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={{fontSize: 24, padding: 10}}>Select Language:</Text>
          <FlatList
            data={DATA}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    );
  }
}
