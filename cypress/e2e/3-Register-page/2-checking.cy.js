import { RegistrationFormPage } from '../pageObjects/registrationFormPage';

const registrationFormPage = new RegistrationFormPage();

describe('Registration Form Test 2', () => {
  it('should check headers and labels in the registration form', () => {
    registrationFormPage.visitRegistrationFormPage();
    registrationFormPage.verifyRegistrationFormHeaders();
    registrationFormPage.verifyRegistrationFormLabels();
    registrationFormPage.verifySocialMediaIcons();
  });
});