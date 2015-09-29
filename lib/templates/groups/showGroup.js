Template.umShowGroup.helpers(UserManagementTemplates.umShowGroupHelpers);
Template.umShowGroup.events(UserManagementTemplates.umShowGroupEvents);

Template.umShowGroup.onCreated(function() {
    UM.prototype.umShowGroupOnCreated.call(this);
    UM.prototype.umShowUsersOnCreated.call(this);
});
