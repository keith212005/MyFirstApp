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
  isValidEmail: true,
  doesPasswordMatch: true,
  isVisible: false,
  isError: false,
};

export const field_object_login = {
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
  failAlert: false,
  progressVisible: false,
};

export const validateEmailAddress = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    // console.log('Email is Not Correct');
    // this.setState({email: text});
    return false;
  } else {
    // this.setState({email: text});
    // console.log('Email is Correct');
    return true;
  }
};