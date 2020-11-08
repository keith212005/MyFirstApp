import React from 'react';
import {StyleSheet} from 'react-native';
import * as Responsive from '@helpers';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerText: {
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
    fontSize: 40,
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollView: {
    paddingHorizontal: 35,
    padding: 10,
  },

  field_group: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
  },
  errorMsg: {
    color: 'red',
  },
  imageContainer: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
  },
});

export {styles};
