import { expect, type Locator, type Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  readonly searchInput: Locator;
  readonly loginButton: Locator;
  readonly createAccountButton: Locator;
  readonly mainMenuButton: Locator;
  menuItemLink: Locator;
  searchOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search Wikipedia");
    this.loginButton = page.getByRole("link", { name: "Log in" });
    this.createAccountButton = page.getByRole("link", { name: "Create account" });
    this.mainMenuButton = page.getByLabel("Main menu");
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async openLoginPage() {
    await this.loginButton.click();
  }

  async openAccountPage() {
    await this.createAccountButton.click();
  }

  async search(text: string) {
    this.searchOption = this.page.locator(`li[role="option"]:has-text("${text}")`);

    await this.searchInput.fill(text);
    await this.searchOption.first().click();
    await expect(this.page.locator("#firstHeading")).toContainText("Playwright (software)");
  }

  async chooseMenuItem(text: string) {
    this.menuItemLink = this.page.getByRole("link", { name: `${text}` });
    await this.mainMenuButton.check();
    await this.menuItemLink.click();
  }
}
