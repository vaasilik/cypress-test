export function navigateToRegistrationPage() {
    cy.visit('/auth/register');
}
  
export function fillAndSubmitRegistrationForm(registrationPage, fullName, email, password, rePass) {
    registrationPage.fillRegistrationForm(fullName, email, password, rePass);
    registrationPage.checkCheckbox();
    registrationPage.verifyFormValues(fullName, email, password, rePass);
    registrationPage.submitRegistrationForm();
}
  
export function checkFormHeadersAndLabels(registrationPage) {
    registrationPage.checkFormHeadersAndLabels();
}

export function validateFullNameError(errorMessage) {
    cy.get('[name="fullName"]').type('...');
    cy.get("body").click();
    cy.get('p.caption.status-danger').should('contain', errorMessage);
  }
  
  export function validateEmailError(errorMessage) {
    cy.get('[name="email"]').type('33.22');
    cy.get("body").click();
    cy.get('p.caption.status-danger').should('contain', errorMessage);
  }
  
  export function validatePasswordError(errorMessage) {
    cy.get('[name="password"]').type('111');
    cy.get("body").click();
    cy.get('p.caption.status-danger').should('contain', errorMessage);
  }