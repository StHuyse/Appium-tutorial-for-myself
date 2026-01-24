//Post x Interaction & post x privacy
import BasePage from "../BasePage";

export default class HomePage extends BasePage{
    get buttonSignOut(){return $(~'TAG_ICON_BUTTON_LOGOUT') }
    get buttonYes(){return $('~TAG_BUTTON_YES')}
    //get buttonNo(){return $('~TAG_BUTTON_NO')}
    get ownPersonalPage(){return $('~TAG_CURRENT_USER')}
    get createPostField() {return $('~TAG_CREATE_POST')}
    //get listFriend(){return $('~TAG_USERS_ROW')}
    get friendInListFriend(){return $('~TAG_ITEM_IN_ROW')}
    get avatarOfThePostOwner(){return $('~TAG_POSTER_AVATAR')}
    get buttonMoreOption(){return $('new UiSelector().className("android.widget.Button").instance(0)')}
    get listPost(){return $('~TAG_POST_COLUMN')}
    get postInListPost(){return $('~TAG_POST_IN_COLUMN')}
    //get copyTextOfThePost(){return $('~')}
    get imageOfThePost(){return $('~TAG_POST_IMAGE')}
    get buttonDownloadImage(){return $('~TAG_BUTTON_DOWNLOAD')}
    get buttonCloseImage(){return $('~TAG_BUTTON_CLOSE')}
    get buttonLike(){return $('~TAG_BUTTON_LIKE')}
    get buttonComment(){return $('~TAG_BUTTON_COMMENT')}
    get buttonShare(){return $('~TAG_BUTTON_SHARE')}
    
    

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
    
}