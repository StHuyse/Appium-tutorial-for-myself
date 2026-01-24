import LoginPage from '#roots/pages/Authentication/signup_page.js';
import { userData } from '#roots/config/testData.js';

describe('Login test', () => {
  let loginPage;

  before(async () => {
    loginPage = new LoginPage();
  });

  it('should log in successfully with valid credentials', async () => {
    await loginPage.handlePermission();
    await loginPage.login(userData.validUser.email, userData.validUser.password);
    
    // Add assertion to verify successful login
    // You can add verification for successful login elements here
    console.log('Login test completed successfully');
  });

  it('should handle permission dialog', async () => {
    await loginPage.handlePermission();
    console.log('Permission dialog handled');
  });
});
