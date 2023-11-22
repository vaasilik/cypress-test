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