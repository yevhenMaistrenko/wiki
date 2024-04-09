import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { BasePage } from "../pages/basePage";
import { AccountPage } from "../pages/accountPage";
import { DonationPage } from "../pages/donationPage";

type MyFixtures = {
  loginPage: LoginPage;
  basePage: BasePage;
  accountPage: AccountPage;
  donationPage: DonationPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  donationPage: async ({ page }, use) => {
    await use(new DonationPage(page));
  },
});
export { expect } from "@playwright/test";
