import BasePage from "../BasePage.js";
import SignInPage from "./signin_page.js";

export default class ForgotPasswordPage extends BasePage {
    get usernameField() { return $('android=new UiSelector().className("android.widget.EditText")')}
    get buttonResetPassword(){return $('android=new UiSelector().text("Send Reset Link")')}
    get buttonBack(){return $('~TAG_BUTTON_BACK')}

    async forgotPassword(username){
        await this.waitAndClickElement(new SignInPage().forgotPasswordField);
        await this.clickElementAndEnterText(this.usernameField, username);
        await this.buttonResetPassword.click();
    }
}