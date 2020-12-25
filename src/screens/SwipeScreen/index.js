import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {styles} from './style';
import {LinearGradientButton} from '@components';
import {actionCreaters} from '@actions';
import * as Resource from '@resource';

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Slide 1',
          text: 'Slide Text',
        },
        {
          title: 'Slide 2',
          text: 'Slide Text',
        },
        {
          title: 'Slide 3',
          text: 'Slide Text',
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    if (this.props.language === '') {
      this.props.navigation.replace('Language');
    } else {
      this.props.navigation.replace(
        this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
      );
    }
  }

  _renderItem({item, index}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, color: Resource.colors.white}}>
            {item.title}
          </Text>
          <Text style={{color: Resource.colors.white}}>{item.text}</Text>
          <Text style={{color: Resource.colors.white}}>Index - {index}</Text>
        </View>
        <View style={styles.footer}>
          {index == 2 ? (
            <View style={{alignItems: 'flex-end'}}>
              <LinearGradientButton
                title="Start"
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
          ) : null}
        </View>
      </View>
    );
  }

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: Resource.colors.transparent,
        }}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 10,
          backgroundColor: Resource.colors.primary,
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
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
          sliderWidth={Resource.deviceWidth}
          itemWidth={Resource.deviceWidth}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
          onPress={() => {
            this.carousel.snapToNext();
          }}
        />
        {this.pagination}
      </SafeAreaView>
    );
  }
}

const matchStateToProps = (state) => {
  console.log('Swiper Store = ', JSON.stringify(state));
  return {
    language: state.setAppLanguage.language,
  };
};
const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Swiper);
