import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollView: {padding: 20},
  headerTitleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'normal',
  },
  text_footer: {marginTop: 10},
  field_group: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  errorMsg: {
    color: 'red',
  },
});

export {styles};
