import { verifyURLContains } from '../../models/navigation';
import { navigateToLayoutsPage, fillHorizontalForm } from '../../models/layouts';

describe("Verify layouts page", () => {
  it("Page /pages/forms/layouts", () => {
    navigateToLayoutsPage();
    verifyURLContains('/pages/forms/layouts');

    fillHorizontalForm("example@example.com", "password");
  });
});
