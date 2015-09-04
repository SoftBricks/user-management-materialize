Template.umShowProfile.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowProfile.events(UserManagementTemplates.umShowUserEvents);
Template.umShowProfile.rendered = UserManagementTemplates.umShowUserRendered();

Template.umShowUser.onCreated(function() {
    UM.prototype.umShowUsersOnCreated.call(this);
});
