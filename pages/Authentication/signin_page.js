import BasePage from "../BasePage";

export default class SignInPage extends BasePage {
    get permissionButton() {return $('//*[@text="Cho phép"]')}
    get usernameField() { return $('~TAG_USERNAME')}
    get passwordField() { return $('~TAG_PASSWORD')}
    get forgotPasswordField() { return $('~TAG_FORGOTPASSWORD')}
    get rememberPasswordField() { return $('~TAG_REMEMBERPASSWORD')}
    get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
    get buttonHidePassword(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]/android.view.View[2]/android.widget.Button')}
    get buttonSignInWithGoogle(){return $('~TAG_BUTTON_SIGNINGOOGLE')}
    get loginButton(){ return $('~TAG_BUTTON_SIGNIN')}
  

    async handlePermission() {
        const permission = this.permissionButton;
        if (await permission.isDisplayed()) {
        await permission.click();
        }
    }

    async login(username, password) {
        console.log('Starting login process...');
    
        // Enter username
        console.log('Entering username...');
        await this.setTextWithFallback(this.usernameField, username);
        await browser.pause(1000);
        
        // Enter password
        console.log('Entering password...');
        await this.setTextWithFallback(this.passwordField, password);
        await browser.pause(1000);

        //Check the enable of hide password button
        await this.buttonHidePassword.click();
        await browser.pause(500);
        await this.buttonHidePassword.click();

        // Click remember password if available
        if (await this.isElementDisplayed(this.rememberPasswordField)) {
        console.log('Clicking remember password...');
        await this.rememberPasswordField.click();
        await browser.pause(500);
        }

        // Click login button
        console.log('Clicking login button...');
        await this.loginButton.click();
        console.log('Login process completed');
    }

    async signInWithGoogle(){
        await this.buttonSignInWithGoogle.click();
        await browser.pause(2500);
        const google_account = $('//android.widget.LinearLayout[@resource-id="com.google.android.gms:id/container"])[1]');//choose the 1st account
        await google_account.click();
        console.log('Start sign in with Google!');
    }
}