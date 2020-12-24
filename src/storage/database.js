import React, {Component} from 'react';

import SQLite, {openDatabase} from 'react-native-sqlite-storage';

SQLite.DEBUG(true);

const db = SQLite.openDatabase(
  {name: 'MyFirstAppDB.db'},
  () => {},
  (error) => console.log('Error: ' + error),
);

export default class Database extends Component {
  constructor() {
    super();
  }

  ExecuteQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.transaction((trans) => {
        trans.executeSql(
          sql,
          params,
          (trans, results) => resolve(results),
          (error) => reject(error),
        );
      });
    });
  };

  initTables() {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(
        'CREATE TABLE IF NOT EXISTS USERS(Id INTEGER PRIMARY KEY AUTOINCREMENT,avatar text, fName text,' +
          'lName text, email VARCHAR(50), password VARCHAR(50), phone INTEGER,' +
          ' address TEXT, gender BOOLEAN, dob TEXT);',
      ).then(
        (result) => resolve(),
        (error) => reject(),
      );
    });
  }

  insert(sql, arrValues) {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then(
        (result) => resolve('Success'),
        (error) => reject('Failed'),
      );
    });
  }

  update(sql, arrValues) {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then(
        (result) => resolve('Successfully updated.'),
        (error) => reject('Update Failed'),
      );
    });
  }

  verifyEmail = (sql, arrValues) => {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then((result) => {
        result.rows.length > 0
          ? resolve('Email found')
          : reject('Email not found! Please sign up before login');
      });
    });
  };

  verifyPassword = (sql, arrValues) => {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then((result) => {
        result.rows.length > 0
          ? resolve('Password found')
          : reject('Incorrect password!');
      });
    });
  };

  checkIfUserExists(sql, arrValues) {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then((result) => {
        result.rows.length > 0
          ? reject('User is already registered with this email')
          : resolve(result);
      });
    });
  }

  getUserData = (sql, arrValues) => {
    // return userdata as object
    return new Promise((resolve, reject) => {
      let userInfoObj = {};
      this.ExecuteQuery(sql, arrValues).then((result) => {
        for (let i = 0; i < result.rows.length; i++) {
          let row = result.rows.item(i);
          userInfoObj = row;
        }
        Object.keys(userInfoObj).length > 0
          ? resolve(userInfoObj)
          : reject('No data found');
      });
    });
  };

  deleteAccount = (sql, arrValues) => {
    return new Promise((resolve, reject) => {
      this.ExecuteQuery(sql, arrValues).then(
        (result) => resolve('Account deleted successfully.'),
        (error) => reject('Something went wrong!'),
      );
    });
  };

  render() {
    return null;
  }
}
