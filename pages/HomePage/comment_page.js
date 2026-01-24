import BasePage from "../BasePage";

export default class CommentPage extends BasePage{
    get ownerOfTheComment(){return $(`new UiSelector().description("Poster Avatar").instance(${number})`)}//auto click the user personal page of 1st comment
    get buttonSeeReplies(){return $('//android.widget.TextView[@text="Click here to see all replies"]')}
    get buttonCloseReplies(){return $('//android.widget.TextView[@text="Click here to close all replies"]')}
    get editTextInputComment(){return $('~TAG_INPUT_COMMENT')}
    get buttonSend(){return $('~TAG_BUTTON_SEND')}
    get buttonCommentTheComment(){return $('(//android.widget.ImageView[@content-desc="TAG_BUTTON_COMMENT"])[1]')}//comment the 1st comment
    //get listComment(){return $('~TAG_COMMENTS_LIST')}
    //get cardComment(){return $('~COMMENT_CARD')}
    get buttonLike(){return $('~TAG_BUTTON_LIKE')}
    get buttonBack(){return $('~TAG_BUTTON_BACK')}  

    async clickPersonalPage(){
        //click personal page of the comment owner.
        await this.ownerOfTheComment(1).click();
    }

    async clickPersonalPageOfTheSubComment(){
        //click see all replies then click the personal page of the sub comment.
        await this.buttonSeeReplies.click();
        await browser.pause(300);
        await this.ownerOfTheComment(2).click();
    }

    async clickButtonLike(){
        await this.buttonLike.click();
    }

    async clickSubButtonLike(){
        // click the Like button in a sub comment
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