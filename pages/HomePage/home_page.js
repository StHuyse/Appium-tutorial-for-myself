//Post x Interaction & post x privacy
import BasePage from "../BasePage.js";

export default class HomePage extends BasePage{
    get buttonSearch(){return $('~TAG_ICON_BUTTON_SEARCH')}
    get buttonSignOut(){return $('~TAG_BUTTON_LOGOUT')}
    get buttonYes(){return $('android=new UiSelector().className("android.view.View").instance(5)')}
    //get buttonNo(){return $('~TAG_BUTTON_NO')}
    get ownPersonalPage(){return $('~TAG_CURRENT_USER')}
    get createPostField() {return $('~TAG_CREATE_POST')}
    get listFriend(){return $('~TAG_USERS_ROW')}
    get friendInListFriend(){return $(`new UiSelector().description("TAG_ITEM_IN_ROW").instance(0)`)}//click the 1st friend
    get avatarOfThePostOwner(){return $('~TAG_POSTER_AVATAR')}
    get buttonMoreOption(){return $('android=new UiSelector().className("android.widget.Button").instance(0)')}
    get listPost(){return $('~TAG_POST_COLUMN')}
    get postInListPost(){return $('~TAG_POST_IN_COLUMN')}
    //get copyTextOfThePost(){return $('~')}
    get imageOfThePost(){return $('~TAG_POST_IMAGE')}
    get buttonDownloadImage(){return $('~TAG_BUTTON_DOWNLOAD')}
    get buttonCloseImage(){return $('~TAG_BUTTON_CLOSE')}
    get buttonBackFiveSeconds(){return $('//android.widget.Button[@content-desc="Tua lại 5 giây"]')}
    get buttonSkipFifteenSeconds(){return $('//android.widget.Button[@content-desc="Tua nhanh 15 giây"]')}
    get buttonDisplayedVideo(){return $('//android.widget.ImageButton[@content-desc="Phát"]')}
    //get buttonPreviousVideo(){return $('//android.widget.ImageButton[@content-desc="Trước"]')}
    get buttonNextVideo(){return $('//android.widget.ImageButton[@content-desc="Tiếp theo"]')}
    get buttonSettingVideo(){return $('//android.widget.ImageButton[@content-desc="Cài đặt"]')}
    get buttonSpeedOfTheVideo(){return $('//android.widget.TextView[@resource-id="com.minhtu.firesocialmedia:id/exo_main_text" and @text="Tốc độ"]')}
    get buttonVolumn(){return $('//android.widget.TextView[@resource-id="com.minhtu.firesocialmedia:id/exo_main_text" and @text="Âm thanh"]')}
    get video(){return $('//android.view.View[@resource-id="com.minhtu.firesocialmedia:id/exo_controls_background"]')}
    get buttonScrollToTop(){('~SCROLL_TO_TOP_BUTTON')}
    get settingBar(){return $('~TAG_SETTING_BOTTOM')};
    
    
    async signOut(){
        await this.settingBar.click();
        await this.waitAndClickElement(this.buttonSignOut);
        await this.waitAndClickElement(this.buttonYes);
    }

    async clickCreatPostField(){
        if(this.createPostField.isDisplayed()){
        await this.createPostField.click();
        }
    }

    async displayedVideo(){
        await this.scrollToElement(video);
        await this.displayedVideo.click();
        await $(`//android.widget.SeekBar[@content-desc="00:05"]`);//wait until the video displayed to the 5th second.
        //Pause the video
        await this.displayedVideo.click();
    }

    async findPostsHaveComment(){
        const posts = await $$('android=new UiSelector().description("TAG_POST_IN_COLUMN")');

        for (let post of posts) {
            try {
                const commentTextElement = await post.$('android=new UiSelector().textContains("Comment")');
                const text = await commentTextElement.getText();

                // Extract number (example: "1 Comment" -> 1)
                const match = text.match(/\d+/);
                const commentCount = match ? parseInt(match[0]) : 0;

                if (commentCount >= 1) {
                    await post.$('android=new UiSelector().text("Comment")').click();   
                    break;
                }
            } catch (err) {
                // Skip if structure not matched
                continue;
            }
        }
    }
}