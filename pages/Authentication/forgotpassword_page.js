import BasePage from "../BasePage";

export default class ForgotPasswordPage extends BasePage {
    get usernameField() { return $('~TAG_USERNAME')}
    get buttonResetPassword(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button')}
    get buttonBack(){return $('//android.widget.TextView[@text="Back"]')}

    async forgotPassword(username){
        await this.setTextWithFallback(this.usernameField, username);
        await this.buttonResetPassword.click();
    }
}