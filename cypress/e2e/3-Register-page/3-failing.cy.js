// describe('Registration Form Error Tests', () => {
//   it('should validate fields and display error messages', () => {
//     cy.visit('/auth/register');
  
//     // Валідація поля Full name
//     cy.get('[name="fullName"]').type('...');
//     cy.get("body").click();
//     cy.get('p.caption.status-danger').should('contain', 'Full name should contains from 4 to 50 characters');

//     // Валідація поля Email address
//     cy.get('[name="email"]').type('33.22');
//     cy.get("body").click();
//     cy.get('p.caption.status-danger').should('contain', 'Email should be the real one!');

//     // Валідація поля Password
//     cy.get('[name="password"]').type('111');
//     cy.get("body").click();
//     cy.get('p.caption.status-danger').should('contain', 'Password should contain from 4 to 50 characters');
//   });
// });

import { navigateToRegistrationPage, validateFullNameError, validateEmailError, validatePasswordError } from '../../models/registration';
import { RegistrationPage } from '../../pageObjects/registrationPage'; 

describe('Registration Form Error Tests', () => {
  it('should validate fields and display error messages', () => {

    const registrationPage = new RegistrationPage();
   
    navigateToRegistrationPage();

    validateFullNameError(registrationPage,'Full name should contain from 4 to 50 characters');
    validateEmailError(registrationPage,'Email should be the real one!');
    validatePasswordError(registrationPage,'Password should contain from 4 to 50 characters');
  });
});
