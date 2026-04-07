import BasePage from "../BasePage";

export default class GroupPage extends BasePage{
    get buttonCreateGroup(){return $('~TAG_CREATE_GROUP_BUTTON')}
    get buttonExploreGroup(){return $('~TAG_FIND_GROUP_BUTTON')}
    get buttonSelectGroup(){return $('~TAG_SELECT_GROUP_BUTTON')}
    

}