Template.umShowUser.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowProfile.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowUser.events(UserManagementTemplates.umShowUserEvents);
Template.umShowProfile.events(UserManagementTemplates.umShowUserEvents);
Template.umShowProfile.rendered = UserManagementTemplates.umShowUserRendered();

Template.umShowUser.onCreated(function() {
    UM.prototype.umShowUsersOnCreated.call(this);
});
