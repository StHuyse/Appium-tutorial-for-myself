import BasePage from "../BasePage";

export default class SignInPage extends BasePage {
    get usernameField() { return $('~TAG_USERNAME')}
    get passwordField() { return $('~TAG_PASSWORD')}
    get forgotPasswordField() { return $('~TAG_FORGOTPASSWORD')}
    get rememberPasswordField() { return $('~TAG_REMEMBERPASSWORD')}
    get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
    get buttonSignInWithGoogle(){return $('~TAG_BUTTON_SIGNINGOOGLE')}
    get loginButton(){ return $('~TAG_BUTTON_SIGNIN')}
  

    async handlePermission() {
        const allowButton = await $('//android.widget.Button[@text="Cho phép"]');
        //if exist dialog -> click, else continue
        if (await allowButton.isDisplayed().catch(() => false)) {
            await allowButton.click();
        }
    }

    async login(username, password) {
        await this.usernameField.waitForDisplayed({ timeout: 5000 });
        await this.waitAndSetValue(this.usernameField, username, 10000);
        await this.passwordField.waitForDisplayed({ timeout: 5000 });
        await this.waitAndSetValue(this.passwordField, password, 10000);

        await this.loginButton.waitForEnabled({ timeout: 2000 });
        await this.loginButton.click();
    }

    async signInWithGoogle(){
        await this.buttonSignInWithGoogle.click();

        const firstAccount = await $('//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"][1]');
        await firstAccount.waitForDisplayed({ timeout: 15000 });
        await firstAccount.click();
    }

    async clickRememberPassword(){
        // Click remember password if available
        if (this.isElementDisplayed(this.rememberPasswordField)) {
            await this.rememberPasswordField.click();
        }
    }
}