import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Button,
} from 'react-native';

import * as Resource from '@resource';
import LinearGradientButton from '.././Buttons/linearGradientButton';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class BackgroundCarousel extends Component {
  scrollRef = React.createRef();
  url = 'https://type.fit/api/quotes';

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      quotes: [],
    };
  }

  componentDidMount() {
    this.getQuotes();
  }

  getQuotes = async () => {
    try {
      let data = await fetch(this.url);
      let post = await data.json();
      for (var i = 0; i < 3; i++) {
        this.setState({
          quote: this.state.quotes.push(
            post[Math.floor(Math.random() * 1643) + 1],
          ),
          isLoading: false,
        });
      }
    } catch (error) {}
  };

  setSelectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      selectedIndex,
    });
  };

  handleSkipAll = () => {
    this.props.navigation.replace(
      this.props.autoLoginStatus ? 'DrawerNavigator' : 'StartScreen',
    );
  };

  handleNext = () => {
    this.setState(
      (prev) => {
        selectedIndex: prev.selectedIndex + 1;
      },
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: DEVICE_WIDTH * this.state.selectedIndex,
        });
      },
    );
  };

  MySwipeScreen = (props) => (
    <View style={styles.container}>
      <View style={styles.skipall}>
        <LinearGradientButton
          title="SKIP ALL"
          height={Resource.responsiveHeight(14)}
          width={Resource.responsiveHeight(25)}
          fontSize={15}
          fontColor={Resource.colors.primary}
          borderRadius={10}
          borderWidth={1}
          borderColor={Resource.colors.white}
          fontColor={Resource.colors.primary}
          onPress={() => this.handleSkipAll()}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.quote}>{props.quote.text}</Text>
        <Text />
        <Text style={[styles.quote]}>- {props.quote.author}</Text>
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
            onPress={() => this.handleNext()}
          />
        </View>
      </View>
    </View>
  );

  render() {
    const {quotes, selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          scrollToOverflowEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={this.scrollRef}>
          {quotes.map((quote, i) => (
            <this.MySwipeScreen quote={quote} key={i} />
          ))}
        </ScrollView>

        <View style={styles.circleDiv}>
          {quotes.map((quote, i) => (
            <View
              key={i}
              style={[
                styles.whiteCircle,
                {opacity: i === selectedIndex ? 1 : 0.5},
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Resource.colors.primary,
    width: DEVICE_WIDTH,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: Resource.colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
  },
  quote: {
    fontSize: 20,
    color: Resource.colors.white,
    paddingRight: 30,
    paddingLeft: 30,
    textAlign: 'center',
    fontFamily: Resource.fontFamily.RobotoItalic,
  },
  backgroundImage: {
    height: '100%',
    width: DEVICE_WIDTH,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    height: 7,
    width: 7,
    borderRadius: 3,
    margin: 5,
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  skipall: {
    marginTop: 50,
    marginRight: Resource.responsiveWidth(8),
    alignItems: 'flex-end',
  },
});
