export function navigateToLayoutsPage() {
    cy.visit("/pages/forms/layouts");
  }
  
  export function fillHorizontalForm(email, password) {
    cy.get('nb-card-header:contains("Horizontal form")').next().within(() => {
      cy.get('input[placeholder="Email"]').clear().type(email);
      cy.get('input[placeholder="Password"]').clear().type(password);
  
      cy.get('nb-checkbox label').click();
  
      cy.get('button[ng-reflect-status="warning"]').click();
    });
  }
  