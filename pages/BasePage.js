export default class BasePage {
  /**
   * Wait for an element to be visible and clickable
   * @param {WebdriverIO.Element} element - The element to wait for
   * @param {number} timeout - Maximum time to wait in milliseconds
   */
  async waitAndClick(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
    await element.waitForClickable({ timeout });
    await element.click();
  }

  /**
   * Wait for an element to be visible and then set its value
   * @param {WebdriverIO.Element} element - The element to set value for
   * @param {string} value - The value to set
   * @param {number} timeout - Maximum time to wait in milliseconds
   */
  async waitAndSetValue(element, value, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
  }

  /**
   * More reliable text input for Android using coordinate-based input
   */
  async setTextWithFallback(element, text, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
    
    // Get element location and size for coordinate-based input
    const location = await element.getLocation();
    const size = await element.getSize();
    const centerX = location.x + (size.width / 2);
    const centerY = location.y + (size.height / 2);
    
    // Click on the center of the element to focus it
    await browser.performActions([{
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
        { type: 'pointerDown', button: 0 },
        { type: 'pointerUp', button: 0 }
      ]
    }]);
    await browser.pause(500);
    
    // Clear any existing text by selecting all and deleting
    try {
      await browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
          { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
          { type: 'pointerDown', button: 0 },
          { type: 'pause', duration: 1000 },
          { type: 'pointerUp', button: 0 }
        ]
      }]);
      await browser.pause(200);
      await browser.keys(['Control', 'a']);
      await browser.pause(200);
      await browser.keys(['Delete']);
      await browser.pause(200);
    } catch (_) {
      // If long press fails, try multiple taps to clear
      for (let i = 0; i < 3; i++) {
        await browser.performActions([{
          type: 'pointer',
          id: 'finger1',
          parameters: { pointerType: 'touch' },
          actions: [
            { type: 'pointerMove', duration: 0, x: centerX, y: centerY },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerUp', button: 0 }
          ]
        }]);
        await browser.pause(100);
      }
    }
    
    // Use mobile: type command which works better with semantic elements
    try {
      await browser.execute('mobile: type', { text });
      await browser.pause(500);
      console.log(`Successfully typed: ${text}`);
    } catch (error) {
      console.log(`Mobile type failed: ${error.message}`);
      
      // Fallback: try character by character typing
      try {
        for (const char of text.split('')) {
          await browser.execute('mobile: type', { text: char });
          await browser.pause(100);
        }
        console.log(`Successfully typed character by character: ${text}`);
      } catch (charError) {
        console.log(`Character by character typing failed: ${charError.message}`);
      }
    }
  }

  #escapeForAdb(text) {
    // ADB input text requires spaces as %s and some special chars percent-encoded
    return text
      .replace(/%/g, '%25')
      .replace(/ /g, '%s')
      .replace(/@/g, '%40')
      .replace(/\+/g, '%2B')
      .replace(/\//g, '%2F')
      .replace(/:/g, '%3A')
      .replace(/,/g, '%2C')
      .replace(/=/g, '%3D');
  }

  /**
   * Wait for an element to be visible
   * @param {WebdriverIO.Element} element - The element to wait for
   * @param {number} timeout - Maximum time to wait in milliseconds
   */
  async waitForElement(element, timeout = 10000) {
    await element.waitForDisplayed({ timeout });
  }

  /**
   * Check if an element is displayed
   * @param {WebdriverIO.Element} element - The element to check
   * @returns {boolean} - True if element is displayed
   */
  async isElementDisplayed(element) {
    try {
      return await element.isDisplayed();
    } catch (error) {
      return false;
    }
  }

  /**
   * Take a screenshot with timestamp
   * @param {string} name - The base name for the screenshot
   */
  async takeScreenshot(name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `./screenshots/${name}_${timestamp}.png`;
    await browser.saveScreenshot(filename);
    console.log(`📸 Screenshot saved: ${filename}`);
  }

  /**
   * Scroll to an element
   * @param {WebdriverIO.Element} element - The element to scroll to
   */
  async scrollToElement(element) {
    await element.scrollIntoView();
  }

  /**
   * Wait for a specific text to be present on the page
   * @param {string} text - The text to wait for
   * @param {number} timeout - Maximum time to wait in milliseconds
   */
  async waitForText(text, timeout = 10000) {
    const element = $(`//*[contains(@text, "${text}")]`);
    await this.waitForElement(element, timeout);
  }

  /**
   * Ensure keyboard is properly shown and ready for input
   */
  async ensureKeyboardReady() {
    try {
      // Hide keyboard first
      await browser.hideKeyboard();
      await browser.pause(300);
      
      // Show keyboard by tapping on screen
      const { width, height } = await browser.getWindowSize();
      await browser.touchAction({
        action: 'tap',
        x: width / 2,
        y: height / 2
      });
      await browser.pause(500);
    } catch (_) {
      // Ignore errors, continue
    }
  }
}
