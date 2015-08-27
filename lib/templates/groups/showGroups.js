Template.umShowGroups.helpers(UserManagementTemplates.umShowGroupsHelpers);
Template.umShowGroups.events(UserManagementTemplates.umShowGroupsEvents);

Template.umShowGroups.onCreated(function() {
  UM.prototype.umShowGroupsOnCreated.call(this);
});
