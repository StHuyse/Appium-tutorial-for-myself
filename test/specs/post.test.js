import PostPage from "#roots/pages/HomePage/post_page.js"
import { contentOnly } from "#roots/config/testData.js";

describe('Upload posts in happy cases', () =>{
    let postPage;
    before(async () => {
        postPage = new PostPage();
    });

    it('TC_UP_P_001: Verify user creates a post with message.', async ()=>{
        await postPage.clickCreatPostField();
        await postPage.upPostWithMessageOnly(contentOnly.content);
    });

    it('TC_UP_P_001: Verify user creates a post with message and image.', async ()=>{
        await postPage.clickCreatPostField();
        await postPage.upPostWithImage(contentOnly.content);
    });

    it('TC_UP_P_001: Verify user creates a post with message and video.', async ()=>{
        await postPage.clickCreatPostField();
        await postPage.upPostWithVideo(contentOnly.content);
    });

    it('TC_UP_N_001: Create a post without any message or image.', async ()=>{
        await postPage.clickCreatPostField();
        await postPage.upPostWithNothing();
    });
});