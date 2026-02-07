import BasePage from "../BasePage";

export default class OwnPersonalPage extends BasePage{
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    get buttonMoreOption(){return $('~TAG_BUTTON_MOREOPTIONS')}
    get coverPhoto(){return $('~TAG_COVER_PHOTO')}
    get avatar(){return $(~'TAG_USER_AVATAR')}
    get buttonViewCoverPhoto(){return $('//android.widget.TextView[@text="View cover photo"]')}

    async searchPost(text){
        await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_POST_COLUMN"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`
        );
    }

    async clickAvatar(){
        await this.avatar.click();
    }
    
    async clickCoverPhoto(){
        await this.coverPhoto.click();
    }
}