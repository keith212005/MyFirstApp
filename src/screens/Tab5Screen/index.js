import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

import {styles} from './style';
import {CustomHeader} from '@components';

export default class Tab5 extends React.Component {
  state = {data1: null, data2: null, data3: null};
  componentDidMount() {
    this.getNewQuote1();
    this.getNewQuote2();
    this.getNewQuote3();
  }

  getNewQuote1 = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data1 = await response.json();
      console.log('request 1 - ', data1.author);
      if (!response.ok) {
        throw new Error(data1.author);
      }

      setTimeout(() => {
        this.setState({data1});
      }, 2000);

      // this.setState({data1});
    } catch (error) {
      console.log(error);
      this.setState({data1: {content: 'Opps... Something went wrong'}});
    }
  };

  getNewQuote2 = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data2 = await response.json();
      console.log('request 2 - ', data2.author);

      if (!response.ok) {
        throw new Error(data2);
      }
      setTimeout(() => {
        this.setState({data2});
      }, 2000);
      // this.setState({data2});
    } catch (error) {
      console.log(error);
      this.setState({data2: {content: 'Opps... Something went wrong'}});
    }
  };

  getNewQuote3 = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data3 = await response.json();
      console.log('request 3 - ', data3.author);

      if (!response.ok) {
        throw new Error(data3);
      }
      setTimeout(() => {
        this.setState({data3});
      }, 2000);
      // this.setState({data3});
    } catch (error) {
      console.log(error);
      this.setState({data3: {content: 'Opps... Something went wrong'}});
    }
  };

  render() {
    const {data1, data2, data3} = this.state;
    // if (!data1 || !data2 || !data3) {
    //   // console.log('inside null');
    //   return null;
    // }
    return (
      <>
        <CustomHeader
          title="Tab 5 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title style={styles.title}>{data1 && data1.content}</Title>
              <Paragraph style={styles.footer}>
                - {data1 && data1.author}
              </Paragraph>
            </Card.Content>

            <Card.Actions style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.getNewQuote}>
                <Text>New Quote</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>

        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title style={styles.title}>{data2 && data2.content}</Title>
              <Paragraph style={styles.footer}>
                - {data2 && data2.author}
              </Paragraph>
            </Card.Content>

            <Card.Actions style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.getNewQuote2}>
                <Text>New Quote</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>

        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title style={styles.title}>{data3 && data3.content}</Title>
              <Paragraph style={styles.footer}>
                - {data3 && data3.author}
              </Paragraph>
            </Card.Content>

            <Card.Actions style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.getNewQuote3}>
                <Text>New Quote</Text>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </View>
      </>
    );
  }
}
