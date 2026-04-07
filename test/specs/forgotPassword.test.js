import { coreUser } from '#roots/config/testData.js';
import ForgotPasswordPage from '#roots/pages/Authentication/forgotpassword_page.js';
import SignInPage from '#roots/pages/Authentication/signin_page.js';
import { browser } from '@wdio/globals';

describe('Other Sign In cases', () => {
    let forgotPasswordPage;

  before(async () => {
      forgotPasswordPage = new ForgotPasswordPage();
      await new SignInPage().loginButton.waitForDisplayed({timeout:15000});
  });

  it('TC_SI_004: Verify Back button at Forgot password screen works properly.', async () => {
     await forgotPasswordPage.forgotPassword(coreUser.username);
     await browser.pause(5000);
     await expect(forgotPasswordPage.buttonBack).not.toBeDisplayed();
  });

  after(async ()=>{
    console.log('test pass');
  });
});