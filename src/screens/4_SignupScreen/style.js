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
    paddingTop: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
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
  imageUpload: {
    width: Responsive.widthPercentageToDP('30%'),
    height: Responsive.widthPercentageToDP('30%'),
    borderRadius: 500,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export {styles};
