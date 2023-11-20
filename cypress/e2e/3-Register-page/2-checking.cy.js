// describe('Registration Form Test 2', () => {
//   it('should check headers and labels in the registration form', () => {

//     cy.visit('/auth/register');

//     cy.get('h1.title').should('contain', 'Register');

//     cy.get('[for="input-name"]').should('contain', 'Full name:');
//     cy.get('[for="input-email"]').should('contain', 'Email address:');
//     cy.get('[for="input-password"]').should('contain', 'Password:');
//     cy.get('[for="input-re-password"]').should('contain', 'Repeat password:');
  
//     cy.get('nb-checkbox[name="terms"] label').should('contain', 'Agree to Terms & Conditions');

//     cy.get('[data-name="github"]').should('exist');
//     cy.get('[data-name="facebook"]').should('exist');
//     cy.get('[data-name="twitter"]').should('exist');
//   });
// });

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