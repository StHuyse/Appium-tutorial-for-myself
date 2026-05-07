// utils/helper.js
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


