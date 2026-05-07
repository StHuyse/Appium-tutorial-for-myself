import BasePage from "../BasePage.js";

export default class SignInPage extends BasePage {
    get usernameField() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    }
    get passwordField() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }
    get forgotPasswordField() { return $('~TAG_FORGOTPASSWORD')}
    get rememberPasswordField() { return $('~TAG_REMEMBERPASSWORD')}
    get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
    get buttonSignInWithGoogle(){return $('~TAG_BUTTON_SIGNINGOOGLE')}
    get loginButton(){ return $('~TAG_BUTTON_SIGNIN')}
  

    async login(username, password) {
        await this.clickElementAndEnterText(this.usernameField, username);
        await this.clickElementAndEnterText(this.passwordField, password);
        await this.waitAndClickElement(this.loginButton);
    }

    async signInWithGoogle(){
        await this.buttonSignInWithGoogle.click();

        const firstAccount = await $('android=new UiSelector().resourceId("com.google.android.gms:id/account_type").instance(0)');
        await this.waitAndClickElement(firstAccount);
    }

    async clickRememberPassword(){
        if (this.isElementDisplayed(this.rememberPasswordField)) {
            await this.rememberPasswordField.click();
        }
    }
}