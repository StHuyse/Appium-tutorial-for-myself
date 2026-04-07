import BasePage from "../BasePage";

export default class MyGroupPage extends BasePage{
    get buttonAdd(){return $('~Add')};
    get searchBar(){return $('android=new UiSelector().className("android.widget.EditText")')}
    

    async chooseGroup(groupName){
        await this.waitAndClickElement($(`android=new UiSelector().text("${groupName}")`))
    }
}