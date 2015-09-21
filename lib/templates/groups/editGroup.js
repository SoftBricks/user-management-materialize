Template.umEditGroup.helpers(UserManagementTemplates.umEditGroupHelpers);
Template.umEditGroup.events(UserManagementTemplates.umEditGroupEvents);

Template.umEditGroup.onCreated(function() {
    UM.prototype.umShowGroupsOnCreated.call(this);
    UM.prototype.umShowUsersOnCreated.call(this);
});

AutoForm.addHooks('editGroupForm', {
    onSuccess: function () {
        FlowRouter.go('/showGroup/:groupId', {
            groupId: FlowRouter.getParam('groupId')
        });
    }
});
