Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);
Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
  createUserForm: {
    onSuccess: function(formType, result) {
      Materialize.toast(__('userInsertedSuccessfully'), 4000)
    },
    onError: function(formType, error) {
    }
  }
});
