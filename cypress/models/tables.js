export function verifyTableURL() {
    cy.url().should('include', '/pages/tables/smart-table');
  }
  
  export function verifyRowAdded() {
    cy.get('[ng-reflect-row-class-function]').find('tr:nth-child(1)').should('exist');
  }
  
  export function verifyRowContainsValue(rowIndex, expectedValue) {
    cy.get(`table tbody tr:nth-child(${rowIndex + 1}).ng-star-inserted.ng2-smart-row`).should('contain', expectedValue);
  }