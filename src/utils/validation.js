export const isValidEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};

export const isSameString = (str1, str2) => {
  return str1 === str2 ? true : false;
};

export const isEmpty = (object) => {
  return object.length == 0 ? true : false;
};
