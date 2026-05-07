import BasePage from "../BasePage";

export default class PostPage extends BasePage{
    get postMessageField(){return $(`android=new UiSelector().text("What's on your mind?")`)}
    get buttonClose(){return $('~TAG_BUTTON_CLOSE')}
    get buttonDraftPost(){return $('~TAG_BUTTON_DRAFTPOST')}
    get buttonChangePrivacy(){return $('~TAG_BUTTON_ACCESS_MODIFIER')}
    get buttonPublic(){return $('android=new UiSelector().className("android.widget.RadioButton").instance(0)')}
    get buttonPrivate(){return $('android=new UiSelector().className("android.widget.RadioButton").instance(1)')}
    get buttonSelect(){return $('android=new UiSelector().text("Select")')}
    get postButton(){return $('~TAG_BUTTON_POST')} 
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    get uploadButton(){return $('~TAG_BUTTON_UPLOAD')}  
    get buttonSelectImage(){return $('~TAG_BUTTON_SELECTIMAGE')}
    get buttonSelectVideo(){return $('~TAG_BUTTON_SELECTVIDEO')}
    get deleteButton(){return $('~TAG_BUTTON_DELETE')}
    get buttonDiscardPost(){return $('android=new UiSelector().text("Discard")')}
    get buttonCancelDiscardPost(){return $('android=new UiSelector().text("Cancel")')}
    

    async upPostWithImage(message){
        //console.log('Entering message...');
        await this.clickElementAndEnterText(this.postMessageField, message);
        //console.log('Clicking upload button...');
        await this.waitAndClickElement(this.uploadButton);
        const firstImage = await $(
            'android=new UiSelector().resourceId("com.google.android.providers.media.module:id/icon_thumbnail").instance(0)'
            );//click the 1st image.
        await this.waitAndClickElement(firstImage);
        await this.waitAndClickElement(this.postButton);
    }

    async upPostWithVideo(message){
        //console.log('Entering message...');
        await this.clickElementAndEnterText(this.postMessageField, message);
        await this.waitAndClickElement(this.uploadButton);
        //$$ === lay tat ca nhung phan tu dung voi mo ta, o day la video
        const video = await $$(
            'android=new UiSelector().descriptionContains("video")'
        );
        await this.waitAndClickElement(video[0]);
        await this.waitAndClickElement(this.postButton);
    }

    async upPostWithMessageOnly(message){
        await this.clickElementAndEnterText(this.postMessageField, message);
        await this.waitAndClickElement(this.postButton);
    }

    async upPostWithNothing(){
        await this.waitAndClickElement(this.postButton);
    }

    async exitPost(){
        await this.waitAndClickElement(this.buttonBack);
        await this.waitAndClickElement(this.buttonDiscardPost);
    }
}