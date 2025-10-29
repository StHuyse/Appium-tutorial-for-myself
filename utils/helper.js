// utils/helper.js

/**
 * Wait for an element to be visible and clickable before interacting with it.
 * @param {WebdriverIO.Element} element - The element to wait for
 * @param {number} [timeout=5000] - Maximum time to wait (ms)
 */
export async function waitAndClick(element, timeout = 5000) {
  await element.waitForDisplayed({ timeout });
  await element.waitForClickable({ timeout });
  await element.click();
}

/**
 * Generate a random email address for testing
 * @returns {string} A unique email like "test_abc123@example.com"
 */
export function generateRandomEmail() {
  const random = Math.random().toString(36).substring(2, 10);
  return `test_${random}@example.com`;
}

/**
 * Generate a random username for testing
 * @returns {string}
 */
export function generateRandomUsername() {
  const random = Math.random().toString(36).substring(2, 8);
  return `user_${random}`;
}

/**
 * Take a screenshot with a custom filename (saved in ./screenshots/)
 * @param {string} name - The base name of the screenshot file
 */
export async function takeScreenshot(name) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `./screenshots/${name}_${timestamp}.png`;
  await browser.saveScreenshot(filename);
  console.log(`📸 Screenshot saved: ${filename}`);
}

/**
 * Scroll to a specific element
 * @param {WebdriverIO.Element} element
 */
export async function scrollToElement(element) {
  await element.scrollIntoView();
}

