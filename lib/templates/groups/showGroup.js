Template.umShowGroup.helpers(UserManagementTemplates.umShowGroupHelpers);

Template.umShowGroup.onCreated(function() {
    UM.prototype.umShowGroupOnCreated.call(this);
    UM.prototype.umShowUsersOnCreated.call(this);
});
