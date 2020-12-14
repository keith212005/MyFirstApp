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
            console.log('resolve');
            resolve(results);
          },
          (error) => {
            console.log('reject');
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
    let singleinsert = await this.ExecuteQuery(sql, arrValues);
    console.log(singleinsert);
  };

  update = async (sql, arrValues) => {
    let singleinsert = await this.ExecuteQuery(sql, arrValues);
  };

  render() {
    return null;
  }
}
