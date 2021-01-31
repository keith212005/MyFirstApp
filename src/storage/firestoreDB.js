import firestore from '@react-native-firebase/firestore';

import React, {Component} from 'react';

export default class FirestoreDB extends Component {
  getUsers() {
    return new Promise(async (resolve, reject) => {
      await firestore()
        .collection('Users')
        .get()
        .then((snapshot) => {
          let usersArray = [];
          snapshot.docs.forEach((doc) => {
            usersArray.push(doc.data());
          });
          resolve(usersArray);
        });
    });
  }

  render() {
    return null;
  }
}
