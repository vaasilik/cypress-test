import { ModalDialogPage } from '../pageObjects/modalDialogPage';

const modalDialogPage = new ModalDialogPage();

describe("Verify modal overlays dialog", () => {
  it("Page /pages/modal-overlays/dialog", () => {
    modalDialogPage.visitModalDialogPage();
    modalDialogPage.openDialog();
    modalDialogPage.verifyDialogTitle("Enter your name");
    modalDialogPage.verifyDialogInputs();
    modalDialogPage.verifyDialogButtons();
  });
});
