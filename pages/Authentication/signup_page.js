//Authentication
import BasePage from "../BasePage";

export default class SignUpPage extends BasePage {
  get signUpButton() {return $('~TAG_BUTTON_SIGNUP')}
  get confirmPasswordField() { return $('~TAG_CONFIRMPASSWORD')}
  get backButton() {return $('~TAG_BUTTON_BACK')}
  get hidePassword(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.widget.EditText[2]/android.view.View[2]/android.widget.Button')}
  get hideConfirmPassword(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.widget.EditText[3]/android.view.View[2]/android.widget.Button')}

  async signup(username, password, confirmPassword) {
        console.log('Starting signup process...');

        //Check whether the permission notification is displayed or not(being used for test Sign up component only)
        const permission = $('//*[@text="Cho phép"]');
        if(permission.isDisplayed()){
            await permission.click();
        }
        
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
        // // Check whether the account is already exist
        // let dataAccount = checkAccountExist();
        // const email = JSON.dataAccount.email;
        // if(email === username){
        //     deleteAccountExist();
        // }
        // Click Sign Up button
        console.log('Clicking Sign Up button...');
        await this.signUpButton.click();
        console.log('Signup process completed');
    }
}
