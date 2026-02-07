import BasePage from "../BasePage";


export default class Sharepage extends BasePage{
    get editTextPostMessage(){return $('~TAG_POST_MESSAGE')}
    get buttonShare(){return $('//android.widget.TextView[@text="Share"]')}
    get Messenger(){return $('//android.widget.TextView[@text="Đoạn chat"]')}

    async reuploadPost(text){
        await this.waitAndSetValue(this.editTextPostMessage, text, 10000);
        await this.buttonShare.click();
    }

    async sharePostLink(){
        
    }
}