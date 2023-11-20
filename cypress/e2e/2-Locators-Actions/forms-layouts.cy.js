import { LayoutsPage } from '../pages/layoutsPage';

const layoutsPage = new LayoutsPage();

describe("Verify layouts page", () => {
  it("Page /pages/forms/layouts", () => {
    layoutsPage.visitLayoutsPage();
    layoutsPage.fillHorizontalForm("example@example.com", "password");
  });
});
