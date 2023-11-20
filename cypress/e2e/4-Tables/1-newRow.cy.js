// describe('Add Null Table Row Test', () => {
//     it('should add a new row to the table and verify its addition', () => {
//         cy.visit('/pages/tables/smart-table');

//         cy.get('.ng2-smart-actions-title-add').click();
//         cy.get('.nb-checkmark').click();
//         cy.get('[ng-reflect-row-class-function]').find('tr:nth-child(1)').should('exist');
//     });
// });

import { verifyTableURL, verifyRowAdded } from '../../models/tables';
import { TablePage } from '../../pageObjects/tablePage';

const tablePage = new TablePage();

describe('Add Null Table Row Test', () => {
  it('should add a new row to the table and verify its addition', () => {
    tablePage.visitPage();
    tablePage.addNullTableRow();
    verifyRowAdded();
  });
});