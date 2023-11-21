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