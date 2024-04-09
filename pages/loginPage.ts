import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  readonly page: Page;

  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly loginForm: Locator;
  readonly rememberMeCheckbox: Locator;
  checkboxLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.userNameField = page.getByPlaceholder("Enter your username");
    this.passwordField = page.getByPlaceholder("Enter your password");
    this.loginButton = page.locator("#wpLoginAttempt");
    this.loginForm = page.locator("#userloginForm");
    this.rememberMeCheckbox = page.locator("#wpRemember");
  }

  async login(username: string, password: string) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
