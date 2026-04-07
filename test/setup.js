import { userData } from '#roots/config/testData.js';
import { sessionConfig } from '#roots/config/sessionConfig.js';

global.userData = userData;

global.timeouts = {
  short: 5000,
  medium: 10000,
  long: 30000
};

global.waitForElement = async (element, timeout = timeouts.medium) => {
  await element.waitForDisplayed({ timeout });
};

global.waitAndClick = async (element, timeout = timeouts.medium) => {
  await element.waitForDisplayed({ timeout });
  await element.waitForClickable({ timeout });
  await element.click();
};

global.waitAndSetValue = async (element, value, timeout = timeouts.medium) => {
  await element.waitForDisplayed({ timeout });
  await element.setValue(value);
};

global.isE2E = sessionConfig.keepSession;

global.isLoggedIn = false;

console.log(`Test setup completed | Mode: ${sessionConfig.mode}`);