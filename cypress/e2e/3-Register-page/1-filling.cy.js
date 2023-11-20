import { RegistrationFormPage } from '../pageObjects/registrationFormPage';

const registrationFormPage = new RegistrationFormPage();

describe('Registration Form Test 1', () => {
  it('should fill out the registration form and check the checkbox', () => {
    registrationFormPage.visitRegistrationFormPage();
    registrationFormPage.fillRegistrationForm('Maryna Vasylyk', 'marynav@example.com', 'password123');
    registrationFormPage.checkCheckbox();
    registrationFormPage.verifyFilledValues('Maryna Vasylyk', 'marynav@example.com', 'password123');
    registrationFormPage.clickRegister();
  });
});