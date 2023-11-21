export class RegistrationPage {
  visitPage() {
    cy.visit('/auth/register');
  }

  fillRegistrationForm(fullName, email, password, rePass) {
    cy.get('[name="fullName"]').type(fullName);
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[name="rePass"]').type(rePass);
  }

  checkCheckbox() {
    cy.get('span.custom-checkbox').click();
  }

  verifyFormValues(fullName, email, password, rePass) {
    cy.get('[name="fullName"]').should('have.value', fullName);
    cy.get('[name="email"]').should('have.value', email);
    cy.get('[name="password"]').should('have.value', password);
    cy.get('[name="rePass"]').should('have.value', rePass);
    cy.get('.btn-disabled').should('not.exist');
  }

  submitRegistrationForm() {
    cy.contains('Register').click();
  }

  checkFormHeadersAndLabels() {
    cy.get('h1.title').should('contain', 'Register');
    cy.get('[for="input-name"]').should('contain', 'Full name:');
    cy.get('[for="input-email"]').should('contain', 'Email address:');
    cy.get('[for="input-password"]').should('contain', 'Password:');
    cy.get('[for="input-re-password"]').should('contain', 'Repeat password:');
    cy.get('nb-checkbox[name="terms"] label').should('contain', 'Agree to Terms & Conditions');
    cy.get('[data-name="github"]').should('exist');
    cy.get('[data-name="facebook"]').should('exist');
    cy.get('[data-name="twitter"]').should('exist');
  }
}