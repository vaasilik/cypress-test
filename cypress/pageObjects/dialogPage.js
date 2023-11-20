export class DialogPage {
  visitPage() {
    cy.visit("/pages/modal-overlays/dialog");
  }

  openNameDialog() {
    cy.contains("button", "Enter Name").click();
    cy.get('nb-dialog-container ngx-dialog-name-prompt').should('be.visible');
  }

  verifyDialogElements() {
    cy.get('nb-dialog-container ngx-dialog-name-prompt').within(() => {
      cy.get('nb-card-header').should('contain', 'Enter your name');
      cy.get('input').should('be.visible');
      cy.get('button[status="success"]').should('be.visible').and('contain', 'Submit');
      cy.get('button[status="danger"]').should('be.visible').and('contain', 'Cancel');
    });
  }
}
