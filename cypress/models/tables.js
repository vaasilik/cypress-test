import { navigateToSmartTablePage } from '././navigation';

export function addAndVerifyTableRow() {
  navigateToSmartTablePage();
  tablePage.addTableRow();
  tablePage.verifyAddedRow();
}

export function editAndVerifyTableRow() {
  navigateToSmartTablePage();
  tablePage.editTableRow();
  tablePage.verifyTableRowChanges();
}
