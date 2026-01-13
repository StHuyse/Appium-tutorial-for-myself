import BasePage from './BasePage.js';
import {checkAccountExist, deleteAccountExist} from '#roots/config/realtimeData.js'

export default class SignUpPage extends BasePage {
    get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
    get usernameField() { return $('~TAG_USERNAME'); }
    get passwordField() { return $('~TAG_PASSWORD'); }
    get confirmPasswordField() { return $('~TAG_CONFIRMPASSWORD')}
    get backButton() {return $('~TAG_BUTTON_BACK')}
    get selectAvatar() {return $('~TAG_SELECT_AVATAR')}
    //get hidePassword(){return $('~')}
    //get hideConfirmPassword(){return $('~')}
    get selectNameField(){return $('~TAG_SELECT_NAME')}
    get nextButton(){return $('~TAG_BUTTON_NEXT')}

    async signup(username, password, confirmPassword, selectName) {
        console.log('Starting signup process...');
        
        //Click Sign Up button
        await this.signUpButton.click();

        // Enter username
        console.log('Entering username...');
        await this.setTextWithFallback(this.usernameField, username);
        await browser.pause(1000);
        
        // Enter password
        console.log('Entering password...');
        await this.setTextWithFallback(this.passwordField, password);
        await browser.pause(1000);

        // Enter confirm password
        console.log('Entering confirm password...');
        await this.setTextWithFallback(this.confirmPasswordField, confirmPassword);
        await browser.pause(1000);
        // Check whether the account is already exist
        let dataAccount = checkAccountExist();
        const email = JSON.dataAccount.email;
        if(email === username){
            deleteAccountExist();
        }
        // Click Sign Up button
        console.log('Clicking Sign Up button...');
        await this.signUpButton.click();
        console.log('Signup process completed');

        // Choose avatar in Sign up avatar screen
        await this.selectAvatar.click();
        const firstImage = await $(
            'android=new UiSelector().className("android.widget.ImageView").instance(1)'
        );
        await firstImage.click();

        //Enter nickname
        await this.setTextWithFallback(this.selectNameField, selectName);

        //Click Next button
        await nextButton.click();
    }
}
