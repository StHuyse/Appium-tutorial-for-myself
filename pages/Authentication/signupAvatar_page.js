import BasePage from "../BasePage";

export default class SignUpAvatarPage extends BasePage {
    get selectNameField(){return $('~TAG_SELECT_NAME')}
    get nextButton(){return $('~TAG_BUTTON_NEXT')} 
    get selectAvatar(){return $('~TAG_SELECT_AVATAR')}
    
    async signUpAvatar(){
        // Choose avatar in Sign up avatar screen
        await this.selectAvatar.click();
        const firstImage = await $(
            'android=new UiSelector().className("android.widget.ImageView").instance(1)'
        );
        await firstImage.click();

        //Enter nickname
        await this.setTextWithFallback(this.selectNameField, selectName);

        //Click Next button
        await this.nextButton.click();
    }
}