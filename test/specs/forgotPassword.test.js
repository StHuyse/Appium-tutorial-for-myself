import { coreUser } from '#roots/config/testData.js';
import ForgotPasswordPage from '#roots/pages/Authentication/forgotpassword_page.js'

describe('Other Sign In cases', () => {
    let forgotPasswordPage;

    before(async () => {
        forgotPasswordPage = new ForgotPasswordPage();
    });

  it('TC_SI_004: Verify Back button at Forgot password screen works properly.', async () => {
     const action = forgotPasswordPage.forgotPassword(coreUser.username);
     await expect(action).toBeDisplayed();
  });
});