import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Quotes extends Component {
  async getQuote1() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://api.quotable.io/random');
      let quote1 = await response.json();
      quote1.request = '1';
      if (!response.ok) {
        throw new Error(quote1.author);
      }
      quote1 != null ? resolve(quote1) : reject('Somethingwentwroong');
    });
  }

  async getQuote2() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://api.quotable.io/random');
      const quote2 = await response.json();
      quote2.request = '2';
      if (!response.ok) {
        throw new Error(quote2.author);
      }
      quote2 != null ? resolve(quote2) : reject('Somethingwentwroong');
    });
  }

  async getQuote3() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://api.quotable.io/random');
      const quote3 = await response.json();
      quote3.request = '3';
      if (!response.ok) {
        throw new Error(quote3.author);
      }
      quote3 != null ? resolve(quote3) : reject('Somethingwentwroong');
    });
  }

  async getQuote4() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://api.quotable.io/random');
      const quote4 = await response.json();
      quote4.request = '4';
      if (!response.ok) {
        throw new Error(quote4.author);
      }
      quote4 != null ? resolve(quote4) : reject('Somethingwentwroong');
    });
  }

  async getQuote5() {
    return new Promise(async (resolve, reject) => {
      const response = await fetch('https://api.quotable.io/random');
      const quote5 = await response.json();
      quote5.request = '5';
      if (!response.ok) {
        throw new Error(quote5.author);
      }
      quote5 != null ? resolve(quote5) : reject('Somethingwentwroong');
    });
  }

  render() {
    return null;
  }
}
