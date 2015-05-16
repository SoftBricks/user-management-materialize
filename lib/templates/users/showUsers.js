Template.umShowUsers.helpers(UserManagementTemplates.umShowUsersHelpers);
Template.umShowUsers.events(_.extend(UserManagementTemplates.umShowUsersEvents, {
  'click #enroll': function() {
    Meteor.call('enrollAccount', this._id);
  }
}));
