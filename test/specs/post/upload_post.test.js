import PostPage from "#roots/pages/HomePage/post_page.js"
import { contentOnly } from "#roots/config/testData.js";
import SignInPage from "#roots/pages/Authentication/signin_page.js";
import { userData } from "#roots/config/testData.js";
import HomePage from "#roots/pages/HomePage/home_page.js";
import { expect } from "@wdio/globals";

let postPage = new PostPage();
let homePage = new HomePage();

describe('Upload posts in happy cases', () =>{
    beforeEach(async () => {
        await new SignInPage().login(userData.validUser.email, userData.validUser.password);
        await this.waitForDisplayed($('android=new UiSelector().text("FireSocialMedia")'));
        await homePage.clickCreatPostField();
    });

    it('TC_UP_P_001: Verify user creates a post with message.', async ()=>{
        await postPage.upPostWithMessageOnly(contentOnly.content);
        await this.swipeToReload(homePage.listPost);
        let text = await this.waitForText(contentOnly.content);
        await expect(text).toBeDisplayed();
    });

    it('TC_UP_P_001: Verify user creates a post with message and image.', async ()=>{
        await postPage.upPostWithImage(contentOnly.content);
    });

    it('TC_UP_P_001: Verify user creates a post with message and video.', async ()=>{
        await postPage.upPostWithVideo(contentOnly.content);
    });

});

describe('Upload posts in negative cases', () =>{
    before(async () => {
        await new SignInPage().login(userData.validUser.email, userData.validUser.password);
        await this.waitForDisplayed($('android=new UiSelector().text("FireSocialMedia")'));
        await homePage.clickCreatPostField();
    });

    it('TC_UP_N_001: Create a post without any message or image.', async ()=>{
        await postPage.upPostWithNothing();
    });    
    
});