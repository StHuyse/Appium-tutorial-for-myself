import BasePage from "../BasePage";

export default class PostPage extends BasePage{
    get createPostField() {return $('~TAG_CREATE_POST')}
    get postMessageField(){return $('~TAG_POST_MESSAGE')}
    get uploadButton(){return $('~TAG_BUTTON_UPLOAD')}  
    get buttonSelectImage(){return $('~TAG_BUTTON_SELECTIMAGE')}
    get buttonSelectVideo(){return $('~TAG_BUTTON_SELECTVIDEO')}
    get deleteButton(){return $('~TAG_BUTTON_DELETE')}
    get postButton(){return $('~TAG_BUTTON_POST')} 
    get buttonDraftPost(){return $('~TAG_BUTTON_DRAFTPOST')}
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    get buttonYes(){return $('~TAG_BUTTON_YES')}
    //get buttonNo(){return $('~TAG_BUTTON_NO')}
    get buttonChangePrivacy(){return $('~TAG_BUTTON_ACCESS_MODIFIER')}
    get buttonPublic(){return $('~TAG_SELECT_PUBLIC')}
    get buttonPrivate(){return $('~TAG_SELECT_PRIVATE')}
    get buttonSelect(){return $('//android.widget.TextView[@text="Select"]')}

    async upPostWithImage(message){
        console.log('Starting post process...');
        
        // Enter message
        console.log('Entering message...');
        await this.waitAndSetValue(this.postMessageField, message);
        await browser.pause(1000);
        
        // Click Upload button.
        if (await this.isElementDisplayed(this.uploadButton)) {
        console.log('Clicking upload button...');
        await this.uploadButton.click();
        }

        // Choose image
        const firstImage = await $(
            'android=new UiSelector().className("android.widget.ImageView").instance(1)'//choose the 1st image
            );
        await firstImage.click();

        // Click Post button
        await this.postButton.click();
    }

    async upPostWithVideo(message){
        console.log('Starting post process...');
        
        // Enter message
        console.log('Entering message...');
        await this.waitAndSetValue(this.postMessageField, message);
        await browser.pause(1000);
        
        // Click Upload button.
        if (await this.isElementDisplayed(this.uploadButton)) {
        await this.uploadButton.click();
        }

        // Choose video
        const firstVideo = await $(
            'android=new UiSelector().className("android.widget.ImageView").instance(1)'
        );
        await firstVideo.click();

        // Click Post button
        await this.postButton.click();
    }

    async upPostWithMessageOnly(message){
        
        // Enter message
        await this.waitAndSetValue(this.postMessageField, message, 10000);
        await browser.pause(1000);
        
        // Click Upload button.
        if (await this.isElementDisplayed(this.uploadButton)) {
            await this.uploadButton.click();
        }

        // Click Post button
        await this.postButton.click();
    }

    async upPostWithNothing(){
        // Click Post button
        await this.postButton.click();
    }

    async exitPost(){
        await this.buttonBack.click();
        await browser.pause(300);
        await this.buttonYes.click();
    }
}