import React from 'react';
import {StyleSheet} from 'react-native';
import * as Responsive from '@helpers';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    paddingTop: 5,
    marginLeft: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  footer: {
    flex: 11,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  imageUpload: {
    width: Responsive.widthPercentageToDP('12%'),
    height: Responsive.widthPercentageToDP('12%'),
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export {styles};
