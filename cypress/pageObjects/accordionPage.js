export class AccordionPage {
  visitHomePage() {
    cy.visit("/pages/layout/accordion"); 
  }

  visitFullURL(url) {
    cy.visit(url);
  }

  verifyURLContains(expectedURL) {
    cy.url().should('contain', expectedURL);
  }

  verifyTextInElement(selector, expectedText) {
    cy.get(selector).should('contain.text', expectedText);
  }
}
