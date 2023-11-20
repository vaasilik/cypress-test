export class TablePage {
    visitSmartTablePage() {
      cy.visit('/pages/tables/smart-table');
    }
  
    addTableRow() {
      cy.get('.ng2-smart-actions-title-add').click();
      cy.get('.nb-checkmark').click();
    }
  
    editTableRow() {
      cy.get('.nb-edit').eq(2).click();
      cy.get('.form-control[ng-reflect-model="Bird"]').clear().type('Fox');
      cy.get('.nb-checkmark').click();
    }
  
    verifyAddedRow() {
      cy.get('[ng-reflect-row-class-function]').find('tr:nth-child(1)').should('exist');
    }
  
    verifyTableRowChanges() {
      cy.get('table tbody tr:nth-child(3).ng-star-inserted.ng2-smart-row').should('contain', 'Fox');
    }
  }
  