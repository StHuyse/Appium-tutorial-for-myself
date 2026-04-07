import BasePage from "../BasePage";

export default class HomePage extends BasePage{
    get buttonBack(){return $('~TAG_BUTTON_BACK')}
    //get buttonMoreOption(){return $('~TAG_BUTTON_MOREOPTIONS')}
    get searchBar(){return $('android=new UiSelector().className("android.widget.EditText")')}
    get firstUser(){return $('android=new UiSelector().className("android.widget.Button").instance(0)')}
    get tabPost(){return $('android=new UiSelector().text("Posts")')}

    
    async search(text){
        await this.clickElementAndEnterText(this.searchBar, text);
    }

    async selectPeople(personName){
        const viewButton = await $(`//android.widget.TextView[@text="${personName}"]
            /ancestor::android.view.ViewGroup
            //android.widget.Button[@text="View"]`);

        await this.waitAndClickElement(viewButton);
    }
}