import { navigateToPage, verifyURLContains } from '../../models/navigation';
import { AccordionPage } from '../pageObjects/accordionPage';

describe('First test suite', () => {
  context('First test suite - context', () => {
    it("Visits the home page", () => {
      navigateToPage("pages/layout/accordion");
      verifyURLContains('layout/accordion');
    });
  });

  describe('Second test suite', () => {
    it("Test should pass", () => {
      navigateToPage("/pages/layout/accordion");
      verifyURLContains('layout/accordion');
      verifyTextInElement(".appearance-filled", "Toggle First Item");
    });
  });
});
