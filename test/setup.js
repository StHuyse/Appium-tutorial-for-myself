// Test setup file
import { testData } from '#roots/config/testData.js';

// Global test data
global.testData = testData;

// Global timeout settings
global.timeouts = {
  short: 5000,
  medium: 10000,
  long: 30000
};

// Global helper functions
global.waitForElement = async (element, timeout = 10000) => {
  await element.waitForDisplayed({ timeout });
};

global.waitAndClick = async (element, timeout = 10000) => {
  await element.waitForDisplayed({ timeout });
  await element.waitForClickable({ timeout });
  await element.click();
};

global.waitAndSetValue = async (element, value, timeout = 10000) => {
  await element.waitForDisplayed({ timeout });
  await element.setValue(value);
};

console.log('Test setup completed');
