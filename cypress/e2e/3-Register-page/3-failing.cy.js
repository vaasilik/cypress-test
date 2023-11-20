import { RegistrationFormPage } from '../pageObjects/registrationFormPage';

const registrationFormPage = new RegistrationFormPage();

describe('Registration Form Error Tests', () => {
  it('should validate fields and display error messages', () => {
    registrationFormPage.visitRegistrationFormPage();
    registrationFormPage.validateFullNameField('...');
    registrationFormPage.validateEmailField('33.22');
    registrationFormPage.validatePasswordField('111');
  });
});
  