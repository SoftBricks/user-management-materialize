Template.umEditGroup.helpers(UserManagementTemplates.umEditGroupHelpers);
Template.umEditGroup.events(UserManagementTemplates.umEditGroupEvents);

Template.umEditGroup.onCreated(function() {
    UM.prototype.umShowGroupOnCreated.call(this);
});
