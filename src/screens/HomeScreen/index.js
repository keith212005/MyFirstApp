import React from 'react';
import {View, Text, BackHandler, SafeAreaView} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {styles} from './style';
import {actionCreaters} from '@actions';
import {deviceWidth, colors} from '@resource';
import * as Components from '@components';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      activeIndex: 0,
      nextIndex: 0,
      toggle: true,
      direction: 'up',
      carouselItems: [
        {
          title: 'One',
        },
        {
          title: 'Two',
        },
        {
          title: 'Three',
        },
      ],
    };
    this._renderItem = this._renderItem.bind(this);
    this.handleonPress = this.handleOnPress.bind(this);
  }

  handleExitApp = () => {};

  componentDidMount() {
    this._unsubscribefocus = this.props.navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this._unsubscribeblur = this.props.navigation.addListener('blur', () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    });
  }

  componentWillUnmount() {
    this._unsubscribefocus();
    this._unsubscribeblur();
  }

  handleBackButton = () => {
    this.setState({showAlert: true});
    return true;
  };

  handleSuccess = (value) => {
    this.setState({showAlert: false});
    value ? BackHandler.exitApp() : null;
  };

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text style={{fontSize: 24}}>This is Layout {index + 1}</Text>
      </View>
    );
  };

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

  get pagination() {
    return (
      <Pagination
        dotsLength={this.state.carouselItems.length}
        activeDotIndex={this.state.activeIndex}
        containerStyle={{}}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: 3,
          backgroundColor: colors.primary,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <Components.MyEllipse
          toggle={this.state.toggle}
          activeIndex={this.state.activeIndex}
          nextIndex={this.state.nextIndex}
          direction={this.state.direction}
        />
        <Components.CustomHeader
          title="HOME"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />

        <Carousel
          layout={'default'}
          lockScrollWhileSnapping={true}
          ref={(c) => (this._carousel = c)}
          data={this.state.carouselItems}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          renderItem={this._renderItem}
          onSnapToItem={(slideIndex) => {
            this.setState({activeIndex: slideIndex});
          }}
          pagingEnabled={true}
          onScrollBeginDrag={(event) => {
            if (this.state.activeIndex === 0) {
              this.setState((prev) => ({
                ...prev,
                nextIndex: 1,
              }));
            } else if (this.state.activeIndex === 1) {
              this.setState((prev) => ({
                ...prev,
                nextIndex: 2,
              }));
            } else if (this.state.activeIndex === 2) {
              this.setState((prev) => ({
                ...prev,
                nextIndex: 1,
              }));
            }
          }}
          onScrollEndDrag={() => {}}
        />

        {this.pagination}

        <Components.ExitAppDialog
          showAlert={this.state.showAlert}
          title="Exit"
          content="Are you sure you want to exit?"
          onSuccess={(value) => this.handleSuccess(value)}
        />
      </SafeAreaView>
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

export default connect(matchStateToProps, matchDispatchToProps)(Home);
