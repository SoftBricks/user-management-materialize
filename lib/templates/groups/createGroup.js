Meteor.startup(function() {
    Template.umAddGroup.helpers(UserManagementTemplates.umAddGroupHelpers);
    Template.umAddGroup.events(UserManagementTemplates.umAddGroupEvents);
});

AutoForm.addHooks('createGroupForm', {
    onSuccess: function () {
        FlowRouter.go('/showGroups');
    }
});
