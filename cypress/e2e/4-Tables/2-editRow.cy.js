import { verifyTableURL, verifyRowContainsValue } from '../../models/tables';
import { TablePage } from '../../pageObjects/tablePage';

const tablePage = new TablePage();

describe('Edit Table Row Test', () => {
  it('should edit a table row and verify changes', () => {
    tablePage.visitPage();
    tablePage.editTableRow(2, 'Fox');
    verifyRowContainsValue(2, 'Fox');
  });
});
