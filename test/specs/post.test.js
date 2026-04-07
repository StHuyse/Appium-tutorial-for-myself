import PostPage from "#roots/pages/HomePage/post_page.js"
import { contentOnly } from "#roots/config/testData.js";
import SignInPage from "#roots/pages/Authentication/signin_page.js";
import { userData } from "#roots/config/testData.js";
import { browser } from "@wdio/globals";
import { waitAndClick } from "#roots/utils/helper.js";

describe('Upload posts in happy cases', () =>{
    let postPage;
    beforeEach(async () => {
        await new SignInPage().login(userData.validUser.email, userData.validUser.password);
        await this.waitForDisplayed($('android=new UiSelector().text("FireSocialMedia")'));
        postPage = new PostPage();
    });

    it('TC_UP_P_001: Verify user creates a post with message.', async ()=>{
        await waitAndClick(postPage.clickCreatPostField);
        await postPage.upPostWithMessageOnly(contentOnly.content);
    });

    it('TC_UP_P_001: Verify user creates a post with message and image.', async ()=>{
        await waitAndClick(postPage.clickCreatPostField);
        await postPage.upPostWithImage(contentOnly.content);
    });

    it('TC_UP_P_001: Verify user creates a post with message and video.', async ()=>{
        await waitAndClick(postPage.clickCreatPostField);
        await postPage.upPostWithVideo(contentOnly.content);
    });

    it('TC_UP_N_001: Create a post without any message or image.', async ()=>{
        await waitAndClick(postPage.clickCreatPostField);
        await postPage.upPostWithNothing();
    });

    afterEach(async ()=>{
        //wait for loading the home screen
        await browser.pause(2000);
    })
});