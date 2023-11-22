import { verifyURLContains } from '../../models/navigation';
import { navigateToDialogPage, openNameDialog, verifyDialogElements } from '../../models/modalDialog';

describe("Verify modal overlays dialog", () => {
  it("Page /pages/modal-overlays/dialog", () => {
    navigateToDialogPage();
    verifyURLContains('/pages/modal-overlays/dialog');
    openNameDialog();
    verifyDialogElements();
  });
});