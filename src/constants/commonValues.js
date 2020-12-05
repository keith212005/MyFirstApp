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
    value: '',
  },
  lastname: {
    isError: false,
    error_text: '',
    value: '',
  },
  email: {
    isError: false,
    error_text: '',
    value: '',
  },
  password: {
    isError: false,
    error_text: '',
    value: '',
  },
  confirmPassword: {
    isError: false,
    error_text: '',
    value: '',
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
  phoneno: {
    isError: false,
    error_text: '',
    value: '',
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
    value: '',
  },
  dobVisibility: false,
  isVisible: false,
  isError: false,
  isProcessing: false,
};

export const field_object_login = {
  email: {
    ref: 'emailRef',
    isError: false,
    error_text: '',
    value: '',
  },
  password: {
    ref: 'passwordRef',
    isError: false,
    error_text: '',
    value: '',
  },
  failAlert: false,
  progressVisible: false,
};
