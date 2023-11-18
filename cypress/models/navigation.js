import { AccordionPage } from '../pages/accordionPage';

const accordionPage = new AccordionPage();

export function navigateToPage(url) {
  cy.visit(url);
}

export function verifyURLContains(expectedURL) {
  cy.url().should('contain', expectedURL);
}

export function verifyTextInElement(selector, expectedText) {
  cy.get(selector).should('contain.text', expectedText);
}
