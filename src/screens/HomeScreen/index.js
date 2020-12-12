import React from 'react';
import {
  View,
  Text,
  BackHandler,
  Dimensions,
  Pressable,
  SafeAreaView,
} from 'react-native';

import {DrawerActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import {styles} from './style';
import * as Resource from '@resource';
import * as Components from '@components';
import {actionCreaters} from '@actions';

const DEVICE_WIDTH = Dimensions.get('window').width;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      activeIndex: 0,
      toggle: true,
      carouselItems: [
        {
          title: 'One',
        },
        {
          title: 'Two',
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
    console.log('on back press caled');
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
          backgroundColor: Resource.colors.primary,
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <>
        <Components.CustomHeader
          title="HOME"
          onPress={() =>
            this.props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />

        <SafeAreaView
          style={{
            flex: 1,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Components.MyEllipse />
          <Carousel
            layout={'default'}
            lockScrollWhileSnapping={true}
            ref={(c) => (this._carousel = c)}
            data={this.state.carouselItems}
            sliderWidth={DEVICE_WIDTH}
            itemWidth={DEVICE_WIDTH}
            renderItem={this._renderItem}
            onSnapToItem={(slideIndex) => {
              this.setState({activeIndex: slideIndex});
            }}
            onScrollBeginDrag={() => {
              this.setState((prevState) => ({
                ...prevState,
                toggle: !this.state.toggle,
              }));
            }}
            onScrollEndDrag={() => {
              this.setState((prevState) => ({
                ...prevState,
                toggle: !this.state.toggle,
              }));
            }}
          />

          {this.pagination}

          <Components.ExitAppDialog
            showAlert={this.state.showAlert}
            title="Exit"
            content="Are you sure you want to exit?"
            onSuccess={(value) => this.handleSuccess(value)}
          />
        </SafeAreaView>
      </>
    );
  }
}

const matchStateToProps = (state) => {
  return {
    autoLoginStatus: state.autoLogin.status,
  };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreaters, dispatch);

export default connect(matchStateToProps, matchDispatchToProps)(Home);
