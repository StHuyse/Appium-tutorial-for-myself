//Post x Interaction & post x privacy
import BasePage from "../BasePage";

export default class HomePage extends BasePage{
    get buttonSearch(){return $('~TAG_ICON_BUTTON_SEARCH')}
    get buttonSignOut(){return $('android=new UiSelector().className("android.view.View").index(5)')}
    get buttonYes(){return $('~TAG_BUTTON_YES')}
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
    get buttonLike(){return $('~TAG_BUTTON_LIKE')}
    get buttonComment(){return $('~TAG_BUTTON_COMMENT')}
    get buttonShare(){return $('~TAG_BUTTON_SHARE')}
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

    

    async clickCreatePostField(){
        await this.createPostField.click();
    }

    async clickOwnPersonalPage(){
        await this.ownPersonalPage.click();
    }

    async signOut(){
        await this.buttonSignOut.click();
        await this.buttonYes.click();
    }

    async clickButtonSearch(){
        await this.buttonSearch.click();
    }

    async clickFriendInListFriend(){
        //auto click the first friend
        await this.friendInListFriend.click();
    }

    async clickAvatarOfThePostOwner(){
        await this.avatarOfThePostOwner.click();
    }

    async clickButtonMoreOption(){
        await this.buttonMoreOption.click();
    }

    async clickImageOfThePost(){
        await this.imageOfThePost.click();
    }

    async clickButtonLike(){
        await this.buttonLike.click();
    }

    async clickButtonComment(){
        await this.buttonComment.click();
    }

    async clickButtonShare(){
        await this.buttonShare.click();
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

    async scrollToTop(){
        await this.buttonScrollToTop.click();
        await browser.pause(500);
    }
}