Meteor.methods({
	createUsers: function() {
		createUsers();
	},
	removeTestUser: function() {
		Meteor.users.remove({username: 'test'});
	}
});

function createUsers() {
	if (Meteor.users.find().count() === 0) {
		var users = [
			{
				username: 'superadmin',
				email: 'superadmin@superadmin.de',
				roles: ['superadmin'],
				password: 'superadmin',
				profile: {
					fullname: 'superadmin'
				}
			},
			{
				username: 'admin',
				email: 'admin@admin.de',
				roles: ['admin'],
				password: 'admin',
				profile: {
					fullname: 'admin'
				}
			},
			{
				username: 'user',
				email: 'user@user.de',
				roles: ['user'],
				password: 'user',
				profile: {
					fullname: 'user'
				}
			}
		];
		_.each(users, function(user) {
			var id = Accounts.createUser(user);
			if (user.roles.length > 0) {
         Roles.addUsersToRoles(id, user.roles);
     	}
		});
	}
}
