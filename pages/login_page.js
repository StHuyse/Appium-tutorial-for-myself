import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
  get permissionButton() {return $('//*[@text="Cho phép"]')}
  get usernameField() { return $('~TAG_USERNAME'); }
  get passwordField() { return $('~TAG_PASSWORD'); }
  get forgotPasswordField() { return $('~TAG_FORGOTPASSWORD')}
  get rememberPasswordField() { return $('~TAG_REMEMBERPASSWORD')}
  get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
  get hidePasswordField() {return $('~TAG_BUTTON_SIGNINGOOGLE')}
  get signInButton()   { return $('~TAG_BUTTON_SIGNIN'); }
  get loginButton()    { return $('~TAG_BUTTON_SIGNIN'); }

  async handlePermission() {
    const permission = this.permissionButton;
    if (await permission.isDisplayed()) {
      await permission.click();
    }
  }

  async login(username, password) {
    console.log('Starting login process...');
    
    // Enter username
    console.log('Entering username...');
    await this.setTextWithFallback(this.usernameField, username);
    await browser.pause(1000);
    
    // Enter password
    console.log('Entering password...');
    await this.setTextWithFallback(this.passwordField, password);
    await browser.pause(1000);

    // Click remember password if available
    if (await this.isElementDisplayed(this.rememberPasswordField)) {
      console.log('Clicking remember password...');
      await this.rememberPasswordField.click();
      await browser.pause(500);
    }

    // Click login button
    console.log('Clicking login button...');
    await this.loginButton.click();
    console.log('Login process completed');
  }
}
