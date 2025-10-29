import LoginPage from '#roots/pages/login_page';
import { testData } from '#roots/config/testData.js';

describe('Login test', () => {
  let loginPage;

  before(async () => {
    loginPage = new LoginPage();
  });

  it('should log in successfully with valid credentials', async () => {
    await loginPage.handlePermission();
    await loginPage.login(testData.validUser.email, testData.validUser.password);
    
    // Add assertion to verify successful login
    // You can add verification for successful login elements here
    console.log('Login test completed successfully');
  });

  it('should handle permission dialog', async () => {
    await loginPage.handlePermission();
    console.log('Permission dialog handled');
  });
});
