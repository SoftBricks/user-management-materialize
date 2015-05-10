Template.umAddUser.helpers(UserManagementTemplates.umAddUserHelpers);
Template.umAddUser.events(UserManagementTemplates.umAddUserEvents);
Template.umAddUser.onCreated(UserManagementTemplates.umAddUserRendered);

AutoForm.hooks({
  createUserForm: {
    onSuccess: function(formType, result) {
      GlobalUI.closeDialog();
      Materialize.toast(TAPi18n.__('userInsertedSuccessfully'), 4000)
    },
    onError: function(formType, error) {
    }
  }
});
