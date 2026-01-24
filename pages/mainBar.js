import BasePage from "./BasePage"

export default class MainBar extends BasePage{
    get buttonHome(){return $('~TAG_HOME_BOTTOM')}
    get buttonFriend(){return $('~TAG_FRIEND_BOTTOM')}
    get buttonNotification(){return $('~TAG_NOTIFICATION_BOTTOM')}
    get buttonSetting(){return $('~TAG_SETTING_BOTTOM')}

    async clickButtonHome(){
        await browser.pause(500);
        await this.buttonHome.click();
    }

    async clickButtonFriend(){
        await browser.pause(500);
        await this.buttonFriend.click();
    }

    async clickButtonNotification(){
        await browser.pause(500);
        await this.buttonNotification.click();
    }

    async clickButtonSetting(){
        await browser.pause(500);
        await this.buttonSetting.click();
    }

    async clickButtonCreatePost(){
        await browser.pause(500);
        await driver.findElement('accessibility id', 'Add').click();
    }
}