import BasePage from "../BasePage";

export default class HomePage extends BasePage{
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    //get buttonMoreOption(){return $('~TAG_BUTTON_MOREOPTIONS')}
    get searchBar(){return $('~TAG_SEARCH_BAR')}
    get tabPeople(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View')}
    get firstUser(){return $('//android.view.View[@content-desc="TAG_FRIEND"])[1]')}
    get tabPost(){return $('//u0.i0/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View')}

    async searchPeople(text){
        await this.waitAndSetValue(this.searchBar, text, 10000);
        const clickUser = await $(`new UiSelector().text("${text}")`)
        if(this.isElementDisplayed(clickUser)){
            clickUser.click();
        }
        else{
            this.scrollToElement(clickUser);
        }
    }

    async searchPost(text){
        await this.waitAndSetValue(this.searchBar, text, 10000);
    }
}