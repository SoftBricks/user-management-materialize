Template.umShowUsers.helpers(_.extend(UserManagementTemplates.umShowUsersHelpers, {
  user: function () {
    return Meteor.users.findOne(this._id);
  }
}));
Template.umShowUsers.events(_.extend(UserManagementTemplates.umShowUsersEvents, {
  'click #enroll': function () {
    Meteor.call('enrollAccount', this._id);
  }
}));

Template.umShowUsers.onCreated(function () {
  UM.prototype.umShowUsersOnCreated.call(this);
});
