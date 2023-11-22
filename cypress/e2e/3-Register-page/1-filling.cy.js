import { verifyURLContains } from '../../models/navigation';
import { navigateToRegistrationPage, fillAndSubmitRegistrationForm } from '../../models/registration';
import { RegistrationPage } from '../../pageObjects/registrationPage'; 

describe('Registration Form Test 1', () => {
  it('should fill out the registration form and check the checkbox', () => {
    
    const registrationPage = new RegistrationPage();

    navigateToRegistrationPage();
    verifyURLContains('/auth/register');

    fillAndSubmitRegistrationForm(registrationPage, 'Maryna Vasylyk', 'marynav@example.com', 'password123', 'password123');
  });
});