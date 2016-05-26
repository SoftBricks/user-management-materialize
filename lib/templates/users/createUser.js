Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);
Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
  createUserForm: {
    onSuccess: function () {
      Materialize.toast(__('userInsertedSuccessfully'), 4000);
      FlowRouter.go('/showUsers');
    },
    onError: function () {
    }
  }
});
