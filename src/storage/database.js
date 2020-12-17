import React, {Component} from 'react';

import SQLite, {openDatabase} from 'react-native-sqlite-storage';

SQLite.DEBUG(true);

const db = SQLite.openDatabase(
  {name: 'MyFirstAppDB.db'},
  () => {},
  (error) => {
    console.log('Error: ' + error);
  },
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
          (trans, results) => {
            console.log('resolve in ExecuteQuery');
            // console.log('trans = ' + JSON.stringify(result.rows.item(0)));
            resolve(results);
          },
          (error) => {
            console.log('reject in ExecuteQuery');
            reject(error);
          },
        );
      });
    });
  };

  initTables = async () => {
    await this.ExecuteQuery(
      'CREATE TABLE USERS(Id INTEGER PRIMARY KEY AUTOINCREMENT,avatar text, fName text,' +
        'lName text, email VARCHAR(50), password VARCHAR(50), phone INTEGER,' +
        ' address TEXT, gender BOOLEAN, dob TEXT);',
    );
  };

  insert = async (sql, arrValues) => {
    return new Promise(function (resolve, reject) {
      this.ExecuteQuery(sql, arrValues).then(
        (result) => {
          resolve('Success');
        },
        (error) => {
          reject('Failed');
        },
      );
    });
  };

  update = async (sql, arrValues) => {
    let singleinsert = await this.ExecuteQuery(sql, arrValues);
  };

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

  getUserData = (sql, arrValues) => {
    // return userdata as object
    return new Promise((resolve, reject) => {
      let userInfoObj = {};
      // console.log('before : ' + Object.keys(userInfoObj).length);
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
        (result) => {
          resolve(`Account deleted successfully.`);
        },
        (error) => {
          reject('Something went wrong!');
        },
      );
    });
  };

  render() {
    return null;
  }
}

// console.log(`Record: ${row.fName}`);
// console.log(`Record: ${JSON.stringify(row)}`);
