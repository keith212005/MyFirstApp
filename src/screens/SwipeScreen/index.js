import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import {styles} from './style';
import * as Resource from '@resource';
import {MyCarousel, LinearGradientButton} from '@components';
import {actionCreaters} from '@actions';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    console.log('next');
    this.props.navigation.replace(
      this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
    );
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text>{item.text}</Text>
          <Text>Index - {index}</Text>
        </View>
        <View style={styles.footer}>
          <View style={{alignItems: 'flex-end'}}>
            <LinearGradientButton
              title="Next"
              height={Resource.responsiveHeight(10)}
              width={Resource.responsiveHeight(20)}
              fontSize={12}
              fillColor={Resource.colors.themeButton}
              borderRadius={50}
              borderWidth={1}
              borderColor={Resource.colors.white}
              fontColor={Resource.colors.white}
              onPress={this.handleNext}
            />
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: Resource.colors.white, height: 50}}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={DEVICE_WIDTH}
          itemWidth={DEVICE_WIDTH}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
          onPress={() => {
            this.carousel.snapToNext();
          }}
        />
      </SafeAreaView>
    );
  }
}

// <BackgroundCarousel {...this.props} />
