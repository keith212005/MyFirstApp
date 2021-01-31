import Database from './database';
export const DB = new Database();
export * from './asyncStorage';

import FirestoreDB from './firestoreDB';
export const FireDB = new FirestoreDB();
