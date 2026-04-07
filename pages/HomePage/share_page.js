import BasePage from "../BasePage";


export default class Sharepage extends BasePage{
    get editTextPostMessage(){return $('~TAG_POST_MESSAGE')}
    get buttonShare(){return $('android=new UiSelector().text("Share")')}

    async reuploadPost(text){
        await this.setTextWithFallback(this.editTextPostMessage, text);
        await this.buttonShare.click();
    }
}