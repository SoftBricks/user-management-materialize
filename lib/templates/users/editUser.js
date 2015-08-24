Template.umEditUser.helpers(UserManagementTemplates.umEditUserHelpers);
Template.umEditUser.events(UserManagementTemplates.umEditUserEvents);

Template.umEditUser.onCreated(function() {
    UM.prototype.umShowUsersOnCreated.call(this);
});