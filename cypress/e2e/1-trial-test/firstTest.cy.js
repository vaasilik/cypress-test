// describe('First test suite', () => {

//   context('First test suite - context', () => {
//   it("Visits the home page", () => {
//     cy.visit("/pages/layout/accordion");
//     cy.url().should('contain', 'layout/accordion')
//   });
// });

// describe('Second test suite', () => {
//   it("Test should passed", () => {
//       cy.visit("/pages/layout/accordion");
//       cy.url().should('contain', 'layout/accordion')
//       cy.get(".appearance-filled").should("contain.text", "Toggle First Item")
//     });
//   })
// });

import { navigateTo, navigateToPage, verifyTextInElement, verifyURLContains } from '../../models/navigation';
import { AccordionPage } from '../../pageObjects/accordionPage';

let accordion = new AccordionPage ()

describe('First test suite', () => {
  context('First test suite - context', () => {
    it("Visits the home page", () => {
      navigateTo("/pages/layout/accordion");
      verifyURLContains('/layout/accordion');
    });
  });

  describe('Second test suite', () => {
    it("Test should pass", () => {
      navigateTo("/pages/layout/accordion");
      verifyURLContains('/layout/accordion');
      verifyTextInElement(".appearance-filled", "Toggle First Item");
    });
  });
});
