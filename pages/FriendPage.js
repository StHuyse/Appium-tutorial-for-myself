import BasePage from "./BasePage";

export default class FriendPage extends BasePage{
    get searchBar(){return $('~TAG_SEARCH_BAR')}
    get tabFriend(){return $('(//android.widget.TextView[@text="Friends"])[2]')}
    get tabFriendRequest(){return $('//android.widget.TextView[@text="Friend Requests"]')}
    
    async openPersonalPageOfFriend(){
        const personal_page = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_FRIEND_TAB_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`//text: friend's name
        );
        personal_page.click();
    }

    async openPersonalPageInFriendRequest(){
        await this.tabFriendRequest.click();
        const personal_page = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_FRIEND_REQUEST_TAB_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`//text: friend's name
        );
        personal_page.click();
    } 
}