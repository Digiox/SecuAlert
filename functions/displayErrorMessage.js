export default function (type) {
  switch (type) {
    case 'auth/invalid-email':
      return 'The email is badly formatted'
      break;
    case 'auth/user-disabled':
      return 'This email has been disabled'
      break;
    case 'auth/user-not-found':
      return 'Email not found'
      break;
    case 'auth/wrong-password':
      return 'The password is not correct'
      break;

  }
}