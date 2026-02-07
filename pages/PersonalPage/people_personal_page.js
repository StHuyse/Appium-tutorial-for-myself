import OwnPersonalPage from "./own_personal_page";

export default class PeoplePersonalPage extends OwnPersonalPage{
    get buttonCalling(){return $('//x0.i0/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button')}
    get buttonAddFriend(){return $('//android.widget.TextView[@text="Add Friend"]')}
    get buttonUnfriend(){return $('//android.widget.TextView[@text="Unfriend"]')}
    get buttonCancelFriendRequest(){return $('//android.widget.TextView[@text="Cancel"]')}
    get buttonRespond(){return $('//android.widget.TextView[@text="Respond"]')}

    async clickButtonCalling(){
        await this.buttonCalling.click();
    }

    async clickButtonAddFriend(){
        await this.buttonAddFriend.click();
    }

    async acceptFriendRequest(){
        await this.buttonRespond.click();
        await $('//android.widget.TextView[@text="Accept"]').click();
    }

    async rejectFriendRequest(){
        await this.buttonRespond.click();
        await $('//android.widget.TextView[@text="Reject"]');
    }

    async cancelFriendRequest(){
        await this.buttonCancelFriendRequest.click();
    }
}