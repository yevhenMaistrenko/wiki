import { expect, test } from "../utils/fixtures";
import {
  assertionMessages,
  data,
  menuItems,
  polandGeoCookie,
  ukraineGeoCookie,
} from "../configs/data";

test(`login with invalid credentials`, async ({ basePage, loginPage }) => {
  await basePage.goto(data.baseURL);
  await basePage.openLoginPage();
  await loginPage.login(data.userName, data.password);
  await expect(loginPage.userNameField).toHaveValue(data.userName);
  await expect(loginPage.passwordField).toBeEmpty();
  await expect(loginPage.rememberMeCheckbox).not.toBeChecked();
  await expect(loginPage.loginForm).toContainText(assertionMessages.incorrectUserNameMessage);
});

test(`search for an article`, async ({ basePage }) => {
  await basePage.goto(data.baseURL);
  await basePage.search(data.articleName);
});

test(
  `create new account`,
  {
    tag: ["@unstable"],
    annotation: [
      {
        type: "unstable",
        description: "Unstable test to demonstrate screenshot and video recording on failure",
      },
    ],
  },
  async ({ basePage, accountPage }) => {
    await basePage.goto(data.baseURL);
    await basePage.openAccountPage();
    await accountPage.createAccount(data);
    await expect(accountPage.loginForm).toContainText(assertionMessages.emailMessage);
    await expect(accountPage.loginForm).toContainText(assertionMessages.usernameMessage);
  }
);

test("open donate page from supported country", async ({ basePage, donationPage, context }) => {
  await basePage.goto(data.baseURL);
  await context.addCookies([polandGeoCookie]);

  await basePage.chooseMenuItem(menuItems.donate);
  await expect(donationPage.textContent).toContainText(assertionMessages.donationMessage);
  await expect(donationPage.donationForm).toContainText(assertionMessages.creditCardMessage);
  await expect(donationPage.donationForm).toContainText(assertionMessages.paypalMessage);
  await expect(donationPage.donationForm).toContainText(assertionMessages.googlePayMessage);
});

test("open donate page from not supported country", async ({ basePage, donationPage, context }) => {
  await basePage.goto(data.baseURL);
  await context.addCookies([ukraineGeoCookie]);
  await basePage.chooseMenuItem(menuItems.donate);

  await expect(donationPage.textContent).toContainText(assertionMessages.donationErrorMessage);
});

test("open contact us page", async ({ basePage }) => {
  await basePage.goto(data.baseURL);
  await basePage.chooseMenuItem(menuItems.contactUs);
  await expect(basePage.page.url()).toEqual(data.contactUsURL);
});
