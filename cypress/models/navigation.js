export function verifyURLContains(expectedURL) {
  cy.url().should('contain', expectedURL);
}

export function navigateTo(expectedURL) {
  cy.visit(expectedURL);
}

export function verifyTextInElement(selector, expectedText) {
  cy.get(selector).should('contain.text', expectedText);
}