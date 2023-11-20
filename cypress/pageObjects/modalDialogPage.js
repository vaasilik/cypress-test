export class ModalDialogPage {
    visitModalDialogPage() {
      cy.visit("/pages/modal-overlays/dialog");
    }
  
    openDialog() {
      cy.contains("button", "Enter Name").click();
    }
  
    assertDialogElements() {
      cy.get('nb-dialog-container').within(() => {
        cy.get("ngx-dialog-name-prompt").should('be.visible');
        cy.get('nb-card-header').should('contain', 'Enter your name');
        cy.get('input').should('be.visible');
        cy.get('button[status="success"]').should('be.visible').and('contain', 'Submit');
        cy.get('button[status="danger"]').should('be.visible').and('contain', 'Cancel');
      });
    }
  }
  