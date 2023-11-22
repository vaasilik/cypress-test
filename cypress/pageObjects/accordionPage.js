export class AccordionPage {
  verifyTextInElement(selector, expectedText) {
    cy.get(selector).should('contain.text', expectedText);
  }
}
