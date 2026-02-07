import BasePage from "../BasePage"; 

export default class SettingPage extends BasePage{
    get barSettingGroup(){return $('~TAG_GROUP_BUTTON')}
    get buttonSignOut(){return $('~TAG_BUTTON_LOGOUT')}

    async clickBarSettingGroup(){
        await this.barSettingGroup.click();
    }

    async signOut(){
        await this.buttonSignOut.click();
        await $('//android.widget.TextView[@text="Yes"]');
    }
}