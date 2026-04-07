import BasePage from "../BasePage";


export default class GroupDetailPage extends BasePage{
    get coverPhoto(){return $('~TAG_COVER_PHOTO')}
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    get buttonMoreOptions(){return $('android=new UiSelector().description("TAG_BUTTON_MOREOPTIONS")')}
    get groupAvatar(){return $('~image')}
    get buttonInvite(){return $('android=new UiSelector().text("Invite")')}
    get buttonNotification(){return $('android=Notification')}
    get feedBar(){return $('android=new UiSelector().text("Feed")')}
    get membersBar(){return $('android=new UiSelector().text("Members")')}
    get photosBar(){return $('new UiSelector().text("Photos")')}
    get createPostBar(){return $('android=new UiSelector().text("Write something to the group...")')}
    get buttonLeaveGroup(){return $('android=new UiSelector().text("Leave group")')}
    get buttonManageMembers(){return $('android=new UiSelector().text("Manage members")')}
    
    async scrollToThePost(instance){
        const post = $(`anroid=new UiSelector().description("TAG_POST_IN_COLUMN").instance(${instance})`);
        await this.scrollToElement(post);
    }
}