import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AccountPage extends BasePage {
  readonly page: Page;

  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly emailInput: Locator;
  readonly createAccountButton: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.userNameInput = page.locator("#wpName2");
    this.passwordInput = page.locator("#wpPassword2");
    this.confirmPasswordInput = page.locator("#wpRetype");
    this.emailInput = page.locator("#wpEmail");
    this.createAccountButton = page.locator("#wpCreateaccount");
    this.loginForm = page.locator("#userlogin2");
  }

  async createAccount(object: any) {
    await this.userNameInput.fill(object.userName);
    await this.passwordInput.fill(object.password);
    await this.confirmPasswordInput.fill(object.password);
    await this.emailInput.fill(object.email);
    await this.createAccountButton.click();
  }
}
