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
  confirmpassword: {
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
  phone: {
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
