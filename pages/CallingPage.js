import BasePage from "./BasePage";

export default class CallingPage extends BasePage{
    get buttonRejectCalling(){return $('~TAG_REJECT_CALL_BUTTON')}
    get buttonAcceptCalling(){return $('~TAG_ACCEPT_CALL_BUTTON')}

    async rejectCalling(){
        await this.buttonRejectCalling.click();
    }

    async acceptCalling(){
        await this.acceptCalling.click();
    }
}