import OwnPersonalPage from "./own_personal_page";

export default class PeoplePersonalPage extends OwnPersonalPage{
    get buttonCalling(){return $('android=new UiSelector().description("Call")')}
    get buttonAddFriend(){return $('android=new UiSelector().text("Add Friend")')}
    get buttonUnfriend(){return $('/android=new UiSelector().text("Unfriend")')}
    get buttonCancelFriendRequest(){return $('android=new UiSelector().text("Cancel Request")')}
    get buttonRespond(){return $('android=new UiSelector().text("Respond")')}

    async acceptFriendRequest(){
        await this.buttonRespond.click();
        await this.waitAndClickElement.apply($('android=new UiSelector().text("Accept")'));
    }

    async rejectFriendRequest(){
        await this.buttonRespond.click();
        await $('android=new UiSelector().text("Reject")');
    }
}