import BasePage from "../BasePage";

export default class GroupPage extends BasePage{
    get buttonCreateGroup(){return $('~TAG_CREATE_GROUP_BUTTON')}
    get buttonExploreGroup(){return $('~TAG_FIND_GROUP_BUTTON')}
    get buttonSelectGroup(){return $('~TAG_SELECT_GROUP_BUTTON')}

    async clickButtonCreateGroup(){
        await this.buttonCreateGroup.click();
    }

    async clickButtonExploreGroup(){
        await this.buttonExploreGroup.click();
    }

    async clickButtonSelectGroup(){
        await this.buttonSelectGroup.click();
    }
}