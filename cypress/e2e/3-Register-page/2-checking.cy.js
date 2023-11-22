import { verifyURLContains } from '../../models/navigation';
import { navigateToRegistrationPage, checkFormHeadersAndLabels } from '../../models/registration';
import { RegistrationPage } from '../../pageObjects/registrationPage'; 

describe('Registration Form Test 2', () => {
  it('should check headers and labels in the registration form', () => {
    
    const registrationPage = new RegistrationPage();

    navigateToRegistrationPage();
    verifyURLContains('/auth/register');

    checkFormHeadersAndLabels(registrationPage);
  });
});