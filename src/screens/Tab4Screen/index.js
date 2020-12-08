import React from 'react';
import {View, Text, SafeAreaView, Dimensions, Pressable} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import {styles} from './style';
import * as Components from '@components';
import * as Resource from '@resource';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Tab4 extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Month',
        },
        {
          title: 'Year',
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);
    this.handleonPress = this.handleOnPress.bind(this);
  }

  shouldComponentUpdate(nextProp, nextState) {
    return false;
  }

  handleOnPress = (title) => {
    switch (title) {
      case 'Month':
        return this._carousel.snapToPrev();
      case 'Year':
        return this._carousel.snapToNext();
      default:
        break;
    }
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.titleButton}
            onPress={() => this.handleOnPress('Month')}>
            <Text>Month</Text>
          </Pressable>
          <Pressable
            style={styles.titleButton}
            onPress={() => this.handleOnPress('Year')}>
            <Text> Year</Text>
          </Pressable>
        </View>
        {item.title === 'Month' ? (
          <Components.MyCalendarList />
        ) : (
          <Components.MyCalendar />
        )}
      </View>
    );
  };

  handleNext() {
    this.props.navigation.replace(
      this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
    );
  }

  render() {
    return (
      <>
        <Components.CustomHeader
          title="Tab 4 Screen"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
        <SafeAreaView
          style={{flex: 1, backgroundColor: Resource.colors.white, height: 50}}>
          <Carousel
            apparitionDelay={0}
            layout={'default'}
            ref={(c) => (this._carousel = c)}
            data={this.state.carouselItems}
            sliderWidth={DEVICE_WIDTH}
            itemWidth={DEVICE_WIDTH}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({activeIndex: index})}
          />
        </SafeAreaView>
      </>
    );
  }
}
