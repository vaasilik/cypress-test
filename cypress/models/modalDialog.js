import { navigateToModalDialogPage } from '././navigation';

export function openDialogAndVerifyElements() {
  navigateToModalDialogPage();
  modalDialogPage.openDialog();
  modalDialogPage.assertDialogElements();
}
