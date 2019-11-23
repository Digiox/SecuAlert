export default function (type) {
  switch (type) {
    case 'auth/invalid-email':
      return 'This address is not correctly formatted'
      break;
    case 'auth/user-disabled':
      return 'This email has been disabled'
      break;
    case 'auth/user-not-found':
      return 'Email not found'
      break;
    case 'auth/wrong-password':
      return 'The password is wrong'
      break;
    case 'auth/mail-confirm-wrong':
      return ' The adresses are not the same'
      break;
    case 'auth/password-confirm-wrong':
      return 'Passwords are not the same'
      break;
    case 'auth/email-already-in-use':
      return 'This adress is already in use'
      break;
    case 'auth/invalid-email':
      return 'This adress is not valid'
      break;
    case 'auth/operation-not-allowed':
      return 'An error has occured, if this problem persist, please contact the support'
      break;
    case 'auth/weak-password':
      return 'This password is not secure enough'
      break;
  }
}
