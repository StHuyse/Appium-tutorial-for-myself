import BasePage from "../BasePage";

export default class CommentPage extends BasePage{
    get buttonSeeReplies(){return $(`android=new UiSelector().text("Click here to see all replies")`)}
    get buttonCloseReplies(){return $('android=new UiSelector().text("Click here to close all replies")')}
    get editTextInputComment(){return $('~TAG_INPUT_COMMENT')}
    get buttonSend(){return $('~TAG_BUTTON_SEND')}

    async clickPersonalPage(instance){
        await this.waitAndClickElement(`android=new UiSelector().description("Poster Avatar").instance(${instance})`);
    }

    async enterComment(text){
        await this.clickElementAndEnterText(this.editTextInputComment, text);
    }

    async clickButtonSend(){
        await this.waitAndClickElement(this.buttonSend);
    }

    async clickSeeAllReplies(){
        await this.waitAndClickElement(this.buttonSeeReplies);
    }

    async clickCloseAllReplies(){
        await this.waitAndClickElement(this.buttonCloseReplies);
    }

    async clickPersonalPageOfTheSubComment(){
        //click see all replies then click the personal page of the sub comment.
        await this.buttonSeeReplies.click();
        await browser.pause(300);
        await this.ownerOfTheComment(2).click();
    }

    async clickButtonLike(instance){
        //click like button of the 1st comment
        await this.waitAndClickElement($(`android=new UiSelector().description("TAG_BUTTON_LIKE").instance(${instance})`));
    }

    async clickButtonCommentTheComment(){
        await this.buttonCommentTheComment.click();
    }

    async uploadComment(text){
        await this.setTextWithFallback(this.editTextInputComment,text);
        await this.buttonSend.click();
    }

    async uploadCommentOfComment(text){
        await this.buttonCommentTheComment.click();
        if(this.editTextInputComment.getAttribute('focused')){
            await this.editTextInputComment.setValue('test comment the comment');
        }
        else{
            await this.setTextWithFallback(this.editTextInputComment,text);
        }
    }

    async clickButtonBack(){
        await this.buttonBack.click();
    }
}