import BasePage from "../BasePage";

export default class CreateGroupPage extends BasePage{
    get buttonSelectGroupAvatar(){return $('~TAG_SELECT_GROUP_AVATAR')}
    get editTextGroupName(){return $('~TAG_GROUP_NAME')}
    get buttonPrivacy(){return $('~TAG_BUTTON_ACCESS_MODIFIER')}
    get buttonContinue(){return $('~TAG_BUTTON_NEXT')}
    get checkBoxPublic(){return $('~TAG_SELECT_PUBLIC')}
    get checkBoxPrivate(){return $('~TAG_SELECT_PRIVATE')}
    get buttonNext(){return $('//android.widget.TextView[@text="Select"]')}

}