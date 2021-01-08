import {replace} from 'lodash';

export const isValidEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
  return reg.test(email) === false ? false : true;
};

export const isPhoneNumber = (str) => /^\d+$/.test(str);

export const removeSpace = (str) => replace(str, /\s+/g, '');
