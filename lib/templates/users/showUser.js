Template.umShowUser.helpers(UserManagementTemplates.umShowUserHelpers);
Template.umShowUser.events(UserManagementTemplates.umShowUserEvents);
Template.umShowUser.rendered = UserManagementTemplates.umShowUserRendered();

Template.umShowUser.onCreated(function() {
    UM.prototype.umShowUsersOnCreated.call(this);
});