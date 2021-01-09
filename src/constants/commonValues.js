export const signupRefs = {
  firstNameRef: '',
  lastNameRef: '',
  emailRef: '',
  passwordRef: '',
  confirmPasswordRef: '',
  dobRef: '',
  phonenoRef: '',
  addressRef: '',
};

export const field_object_signup = {
  firstname: {
    isError: false,
    error_text: '',
    value: 'Ketan',
  },
  lastname: {
    isError: false,
    error_text: '',
    value: 'Jingar',
  },
  email: {
    isError: false,
    error_text: '',
    value: 'Kj@gmail.com',
  },
  password: {
    isError: false,
    error_text: '',
    value: '1234',
  },
  confirmpassword: {
    isError: false,
    error_text: '',
    value: '1234',
  },
  avatarSource: {
    isError: false,
    error_text: '',
    value:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  gender: {
    isError: false,
    error_text: '',
    value: '',
  },
  phone: {
    isError: false,
    error_text: '',
    value: '8160626880',
  },
  dob: {
    visible: false,
    isError: false,
    error_text: '',
    value: 'Date of birth',
  },
  address: {
    isError: false,
    error_text: '',
    value: '123 abc st',
  },
  dobVisibility: false,
  isVisible: false,
  isError: false,
  isProcessing: false,
};

export const field_object_login = {
  email: {
    isError: false,
    error_text: '',
    value: 'Kj@gmail.com',
  },
  password: {
    isError: false,
    error_text: '',
    value: 'password',
  },
  failAlert: false,
  progressVisible: false,
};

export const userInfoProps = {
  id: '',
  avatar: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  address: '',
  gender: '',
  dob: '',
};

export const getLanguages = [
  {language: 'English', code: 'en'},
  {language: 'Hindi', code: 'hi'},
  {language: 'Spanish', code: 'es'},
  {language: 'French', code: 'fr'},
];

export const constant = {
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  ENGLISH_LANG: 'en',
  SPANISH_LANG: 'es',
  HINDI_LANG: 'hi',
  FRENCH_LANG: 'fr',
};
