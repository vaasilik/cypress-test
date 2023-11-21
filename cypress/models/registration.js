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

export function typeFullNameInvalid() {
    cy.get('[name="fullName"]').type('...');
}
  
export function typeEmailInvalid() {
    cy.get('[name="email"]').type('33.22');
}
  
export function typePasswordInvalid() {
    cy.get('[name="password"]').type('111');
}
  
export function clickBody() {
    cy.get("body").click();
}
  
export function validateFullNameError() {
    cy.get('p.caption.status-danger').should('contain', 'Full name should contain from 4 to 50 characters');
  }
  
export function validateEmailError() {
    cy.get('p.caption.status-danger').should('contain', 'Email should be the real one!');
}

export function validatePasswordError() {
    cy.get('p.caption.status-danger').should('contain', 'Password should contain from 4 to 50 characters');
}


// export function validateEmailError(selector, errorMessage) {
//     typeEmailInvalid();
//     clickBody();
//     cy.get(selector).should('contain', errorMessage);
//   }
  
// export function validatePasswordError(selector, errorMessage) {
//     typePasswordInvalid();
//     clickBody();
//     cy.get(selector).should('contain', errorMessage);
//   }