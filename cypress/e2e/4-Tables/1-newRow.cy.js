import { TablePage } from '../pageObjects/tablePage';

const tablePage = new TablePage();

describe('Add Null Table Row Test', () => {
    it('should add a new row to the table and verify its addition', () => {
        tablePage.visitTablePage();
        tablePage.addRow();
        tablePage.verifyRowExistence(1);
    });
});