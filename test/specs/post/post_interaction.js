import CommentPage from "#roots/pages/HomePage/comment_page.js";
import BasePage from "#roots/pages/BasePage.js";
import HomePage from "#roots/pages/HomePage/home_page.js";
import { expect } from "@wdio/globals";
import { contentOnly, userData } from "#roots/config/testData.js";
import SignInPage from "#roots/pages/Authentication/signin_page.js";

let commentPage = new CommentPage();
let homePage = new HomePage();
let basePage = new BasePage();
describe(`test post's interaction`, ()=>{
    beforeEach(async ()=>{
        await new SignInPage().login(userData.validUser.email, userData.validUser.password);
        // wait the 1st post displayed.
        await $('android=new UiSelector().description("TAG_POST_IN_COLUMN").instance(0)').waitForDisplayed();
    });

    it('TC_L_P_001: Verify Like button in a post and comment is displayed properly.', async()=>{
        let likeButton = await $('new UiSelector().description("TAG_BUTTON_LIKE").instance(0)');
        await basePage.waitAndClickElement(likeButton);
        expect($('android=new UiSelector().description("Liked").instance(0)')).toBeDisplayed();
    });

    it('TC_L_P_002: Verify Like button in a post and comment performs proper unlike function.', async ()=>{
        let likeButton = await $('new UiSelector().new UiSelector().text("Liked")');
        await basePage.waitAndClickElement(likeButton);
        expect($('android=new UiSelector().description("TAG_BUTTON_LIKE").instance(0)')).toBeDisplayed();
    });

    it('TC_C_P_001: Verify Comment function works properly.', async()=>{
        let firstCommentButton = await $(`android=new UiSelector().description("TAG_BUTTON_COMMENT").instance(0)`);
        await basePage.waitAndClickElement(firstCommentButton);
        await commentPage.enterComment(contentOnly.content);
        await commentPage.clickButtonSend();
        expect($(`android=new UiSelector().text(${contentOnly.content})`)).toBeDisplayed();        
    });

    it('TC_C__P_002: Verify user can comment a comment in a post.', async ()=>{
        await homePage.findPostsHaveComment();
        await waitAndClickElement($(`android=new UiSelector().description("TAG_BUTTON_COMMENT").instance(0)`));//click the 1st button comment
        await commentPage.enterComment(contentOnly.content);
        await commentPage.clickButtonSend();
        await basePage.waitAndClickElement(commentPage.buttonSeeReplies);
        expect($(`android=new UiSelector().text(${contentOnly.content})`)).toBeDisplayed();
    });
});