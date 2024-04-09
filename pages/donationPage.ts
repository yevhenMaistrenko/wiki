import { type Locator, type Page } from "@playwright/test";

export class DonationPage {
  readonly page: Page;

  readonly textContent: Locator;
  readonly donationForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textContent = page.locator("#mw-content-text");
    this.donationForm = page.locator("#actual-form");
  }
}
