import { TablePage } from '../pages/tablePage';

const tablePage = new TablePage();

describe('Edit Table Row Test', () => {
    it('should edit a table row and verify changes', () => {
        tablePage.visitTablePage();
        tablePage.editRow(2, 'Fox');
        tablePage.verifyRowContent(3, 'Fox');
    });
});
