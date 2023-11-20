// describe("Verify layouts page", () => {
//   it("Page /pages/forms/layouts", () => {
//     cy.visit("/pages/forms/layouts");

//     cy.get('nb-card-header:contains("Horizontal form")').next().within(() => {
//       cy.get('input[placeholder="Email"]').clear().type("example@example.com");
//       cy.get('input[placeholder="Password"]').clear().type("password");

//       cy.get('nb-checkbox label').click();

//       cy.get('button[ng-reflect-status="warning"]').click();
//     });
//   });
// });

import { verifyURLContains } from '../../models/navigation';
import { navigateToLayoutsPage, fillHorizontalForm } from '../../models/layouts';

describe("Verify layouts page", () => {
  it("Page /pages/forms/layouts", () => {
    navigateToLayoutsPage();
    verifyURLContains('/pages/forms/layouts');

    fillHorizontalForm("example@example.com", "password");
  });
});
