// describe("Verify modal overlays dialog", () => {
//   it("Page /pages/modal-overlays/dialog", () => {

//     cy.visit("/pages/modal-overlays/dialog");
//     cy.contains("button", "Enter Name").click();
//     cy.get('nb-dialog-container').within(() => {
//       cy.get("ngx-dialog-name-prompt").should('be.visible');
//       cy.get('nb-card-header').should('contain', 'Enter your name');
//       cy.get('input').should('be.visible');
//       cy.get('button[status="success"]').should('be.visible').and('contain', 'Submit');
//       cy.get('button[status="danger"]').should('be.visible').and('contain', 'Cancel');
//     });
//   });
// });

import { verifyURLContains } from '../../models/navigation';
import { navigateToDialogPage, openNameDialog, verifyDialogElements } from '../../models/modalDialog';

describe("Verify modal overlays dialog", () => {
  it("Page /pages/modal-overlays/dialog", () => {
    navigateToDialogPage();
    verifyURLContains('/pages/modal-overlays/dialog');
    openNameDialog();
    verifyDialogElements();
  });
});