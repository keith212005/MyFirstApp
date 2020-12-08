import {icon} from '@resource';

export const getIcon = (label) => {
  switch (label) {
    case 'firstname':
      return icon.user;
    case 'lastname':
      return icon.user;
    case 'email':
      return icon.envelope;
    case 'password':
      return icon.lock;
    case 'confirmpassword':
      return icon.lock;
    case 'phone':
      return icon.phone;
    case 'address':
      return icon.address;
    case 'camera':
      return icon.camera;
    default:
      break;
  }
};
