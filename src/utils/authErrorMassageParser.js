export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Lütfen geçerli bir e-posta adresi giriniz..';
    case 'auth/email-already-exists	':
      return 'Bu e-posta daha önce kullanılmış..';
    case 'auth/user-not-found':
      return 'Böyle bir kullanıcı bulunamadı..';
      case 'auth/wrong-password':
        return 'Hatalı parola..';

    default:
      return errorCode;
  }
}
