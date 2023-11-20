export class TablePage {
  visitPage() {
    cy.visit('/pages/tables/smart-table');
  }

  addNullTableRow() {
    cy.get('.ng2-smart-actions-title-add').click();
    cy.get('.nb-checkmark').click();
  }

  verifyRowAdded() {
    cy.get('[ng-reflect-row-class-function]').find('tr:nth-child(1)').should('exist');
  }
  
  editTableRow(rowIndex, newValue) {
    cy.get('.nb-edit').eq(rowIndex).click();
    cy.get('.form-control[ng-reflect-model="Bird"]').clear().type(newValue);
    cy.get('.nb-checkmark').click();
  }

  verifyRowContainsValue(rowIndex, expectedValue) {
    cy.get(`table tbody tr:nth-child(${rowIndex + 1}).ng-star-inserted.ng2-smart-row`).should('contain', expectedValue);
  }
}
  