import SignInPage from '#roots/pages/Authentication/signin_page.js';
import { userData } from '#roots/config/testData.js';
import HomePage from '#roots/pages/HomePage/home_page.js';
import { browser, expect } from '@wdio/globals';

let signInPage;
let homePage;

describe('Positive case of Sign In function', () => {
  beforeEach(async () => {
    signInPage = new SignInPage();
    homePage = new HomePage();
  });

  it('TC_SI_P_001: Valid user sign in.', async () => {
    await signInPage.login(userData.validUser.email, userData.validUser.password);
    //console.log('before expect');
    await browser.pause(5000);
    await homePage.buttonSignOut.waitForExist({ timeout: 5000 });
    //console.log('button logout is displayed');
    await expect(homePage.buttonSignOut).toBeDisplayed();
    //console.log('after expect');    
  });

  it('TC_SI_P_002: Valid user Sign in with Google(account already exist).', async () => {
    await signInPage.signInWithGoogle();
    await expect(homePage.buttonSignOut).toBeDisplayed(); 
  });

  afterEach(async() =>{
      console.log('start signout');
      await homePage.signOut();
  });
});

describe('Negative case of Sign In function', ()=>{
  beforeEach(async () => {
    signInPage = new SignInPage();
    homePage = new HomePage();
  });

  it('TC_SI_N_001: User sign in with invalid Username.', async () => {
    const invalidUsername = await signInPage.login(userData.invalidUser.email, userData.invalidUser.password);
    await expect(invalidUsername).toBeDisplayed();
  });

  it('TC_SI_N_002: User sign in with invalid Password.', async () => {
    const invalidPassword = await signInPage.login(userData.invalidUser.email, userData.invalidUser.password);
    await expect(invalidPassword).toBeDisplayed();
  });

  it('TC_SI_N_003: Leave blank 1 in 2 or both Username and Password.', async () => {
    const emptyUser = await signInPage.login(userData.emptyCredentials.email, userData.emptyCredentials.password);
    await expect(emptyUser).toBeDisplayed();
  });
});
