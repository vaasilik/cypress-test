import { navigateToRegistrationPage, typeFullNameInvalid, clickBody, typeEmailInvalid, typePasswordInvalid, validateRegistrationError } from '../../models/registration';
  describe('Registration Form Error Tests', () => {
    it('should validate fields and display error messages', () => {

    navigateToRegistrationPage();

    typeFullNameInvalid();
    clickBody();
    validateRegistrationError('Full name should contains from 4 to 50 characters');

    typeEmailInvalid();
    clickBody();
    validateRegistrationError('Email should be the real one!');

    typePasswordInvalid();
    clickBody();
    validateRegistrationError('Password should contain from 4 to 50 characters');
  });
});