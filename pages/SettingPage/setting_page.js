import BasePage from "../BasePage"; 

export default class SettingPage extends BasePage{
    get barSettingGroup(){return $('~TAG_GROUP_BUTTON')}
    get buttonSignOut(){return $('~TAG_BUTTON_LOGOUT')}
    get ownProfile(){return $('android=new UiSelector().text("Profile Information")')}
    get buttonGroup(){return $('android=new UiSelector().text("My Groups")')}
    get buttonPrivacy(){return $('android=new UiSelector().text("Privacy")')}
    get buttonSecuritySettings(){return $('anroid=new UiSelector().text("Security Settings")')}
    get buttonNotificationSettings(){return $('android=new UiSelector().text("Notifications")')}
}