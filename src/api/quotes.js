import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import axios from 'axios';

export default class Quotes extends Component {
  async getQuote() {
    return await axios.get('https://api.quotable.io/random').then(
      (result) => result,
      (error) => 'error',
    );
  }

  async getAllQuotes() {
    let arr = [
      this.getQuote(),
      this.getQuote(),
      this.getQuote(),
      this.getQuote(),
      this.getQuote(),
    ];
    return new Promise(function (resolve, reject) {
      axios
        .all(arr)
        .then(
          axios.spread((...results) => {
            var allQuotes = [];
            let q1 = results[0].data;
            let q2 = results[1].data;
            let q3 = results[2].data;
            let q4 = results[3].data;
            let q5 = results[4].data;
            q1.request = '1';
            q2.request = '2';
            q3.request = '3';
            q4.request = '4';
            q5.request = '5';

            allQuotes.push(q1, q2, q3, q4, q5);
            resolve(allQuotes);
          }),
        )
        .catch((error) => {
          console.log('quotes.js = ', error);
          reject();
        });
    });
  }

  render() {
    return null;
  }
}
