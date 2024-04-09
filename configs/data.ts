export const data = {
  baseURL: "https://en.wikipedia.org/",
  contactUsURL: "https://en.wikipedia.org/wiki/Wikipedia:Contact_us",
  pageURL: "https://en.wikipedia.org/wiki/Playwright_(software)",
  articleName: "Playwright (software)",
  userName: "dasdasdasd",
  password: "asdasdasdas",
  email: "123@gmail.com",
};

export const menuItems = {
  donate: "Donate",
  contactUs: "Contact us",
};

export const assertionMessages = {
  incorrectUserNameMessage: "Incorrect username or password entered. Please try again.",
  emailMessage: "Please look for an email from us to verify your address.",
  usernameMessage: "Your username is public and cannot be made private later.",
  notLoggedInMessage: "You are not logged in.",
  donationMessage:
    "Thank you for considering a donation to the Wikimedia Foundation, the nonprofit that hosts Wikipedia and other crucial free knowledge projects.",
  donationErrorMessage:
    "Thank you for your interest in supporting the Wikimedia Foundation, and we are sorry you were not able to donate.",
  creditCardMessage: "Donate by credit/debit card Visa MasterCard American Express JCB Discover",
  paypalMessage: "PayPal",
  googlePayMessage: "Google Pay",
};

export const ukraineGeoCookie = {
  name: "GeoIP", // Name of the cookie to update
  value: "UA:12:Dnipro:48.47:35.03:v4", // New value for the cookie
  domain: ".wikimedia.org", // Optional domain for the cookie
  path: "/", // Optional path for the cookie
  httpOnly: true, // Optional flag for HTTP-only cookies
  secure: true, // Optional flag for secure cookies
};

export const polandGeoCookie = {
  name: "GeoIP", // Name of the cookie to update
  value: "PL:14:Warsaw:52.23:21.01:v4", // New value for the cookie
  domain: ".wikimedia.org", // Optional domain for the cookie
  path: "/", // Optional path for the cookie
  httpOnly: true, // Optional flag for HTTP-only cookies
  secure: true, // Optional flag for secure cookies
};
