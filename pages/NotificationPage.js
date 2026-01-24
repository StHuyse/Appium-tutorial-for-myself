import BasePage from "./BasePage";

export default class NotificationPage extends BasePage{
    get listNotification(){return $('~TAG_NOTIFICATION_LIST')}
    get notification(){return $('~TAG_NOTIFICATION')}

    async clickCommentNotification(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("commented in your post!"))'
        );
        notification.click();
    }

    async clickLikeNotification(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("liked your post!"))'
        );
        notification.click();
    }

    async clickUploadNotification(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("uploaded a new post!"))'
        );
        notification.click();
    }

    async clickFriendRequestNotification(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("sent you a friend request!"))'
        );
        notification.click();
    }

    async clickJoinGroupRequest(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("invited you to a group!"))'
        );
        notification.click();
    }

    async clickSharePostNotification(text){
        const notification = await driver.$(
            'android=new UiScrollable(new UiSelector().description("TAG_NOTIFICATION_LIST"))' +
            `.scrollIntoView(new UiSelector().text("${text}"))`+
            ' and .scrollIntoView(new UiSelector().text("shared a post!"))'
        );
        notification.click();
    }
}