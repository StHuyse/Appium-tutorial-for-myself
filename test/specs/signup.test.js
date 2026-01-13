import SignUpPage from '#roots/pages/signup_page.js';
import { userData } from '#roots/config/testData.js';
import { nickname } from '#roots/config/testData.js';

describe('Signup test TC_SU', () => {
  let signupPage;

  before(async () => {
    signupPage = new SignUpPage();
  });

  it('TC_SU_P_001 + TC_SU_P_002: Valid user sign up', async () => {
    await signupPage.signup(userData.validUser.email, userData.validUser.password, userData.validUser.password, nickname.username);
    console.log('Test case TC_SU_P_001 and TC_SU_P_002 pass');
  });
});
