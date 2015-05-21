Package.describe({
	name: 'softbricks:user-management-materialize',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.0.5');
	api.use(['templating', 'underscore'], 'client');
	api.use('useraccounts:materialize', ['client', 'server']);
	api.use('softbricks:user-management', ['client', 'server']);
	api.use('materialize:materialize', ['client']);
	api.use('fastclick', ['client']);
	api.use('tap:i18n@1.4.0', ['client', 'server']);
	api.imply('softbricks:user-management@0.0.1', ['client', 'server']);

	// TO-DO add compiled css files!
	api.use('stolinski:stylus-multi');
	api.addFiles("package-tap.i18n", ["client", "server"]);
	api.addFiles(['lib/stylesheets/list.styl'], 'client');
	api.addFiles(['lib/stylesheets/buttons.styl'], 'client');
	api.addFiles(['lib/stylesheets/inputs.styl'], 'client');
	api.addFiles(['lib/stylesheets/navbar.styl'], 'client');


	api.addFiles(['lib/style.css'], 'client');

	api.addFiles(['lib/templates/components/infoItem.html',
		'lib/templates/components/infoItem.js'
	], 'client');
	api.addFiles(['lib/templates/components/autoView.html',
		'lib/templates/components/autoView.js'
	], 'client');

	api.addFiles(['lib/templates/users/showUsers.html'], 'client');
	api.addFiles(['lib/templates/users/showUsers.js'], 'client');
	api.addFiles(['lib/templates/users/sideBarElement.html'], 'client');
	api.addFiles(['lib/templates/users/sideBarElement.js'], 'client');
	api.addFiles(['lib/templates/users/showUser.html',
		'lib/templates/users/showUser.js'
	], 'client');
	api.addFiles(['lib/templates/users/showUserToolbar.html',
		'lib/templates/users/showUserToolbar.js'
	], 'client');
	api.addFiles(['lib/templates/users/editUser.html',
		'lib/templates/users/editUser.js'
	], 'client');
	api.addFiles(['lib/templates/users/createUser.html',
		'lib/templates/users/createUser.js'
	], 'client');
	api.addFiles(['lib/templates/groups/showGroups.html',
		'lib/templates/groups/showGroups.js'
	], 'client');
	api.addFiles(['lib/templates/groups/createGroup.html',
		'lib/templates/groups/createGroup.js'
	], 'client');
	api.addFiles(['lib/templates/groups/showGroup.html',
		'lib/templates/groups/showGroup.js'
	], 'client');
	api.addFiles(['lib/templates/groups/sideBarElementGroup.html',
		'lib/templates/groups/sideBarElementGroup.js'
	], 'client');
	api.addFiles(['lib/templates/groups/editGroup.html',
		'lib/templates/groups/editGroup.js'
	], 'client');


});

Package.onTest(function (api) {

	api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"]);
	api.use('softbricks:user-management', ['client', 'server']);
	api.use(['accounts-password']);
	api.use('meteorhacks:flow-router');

	api.addFiles('tests/client/sampleClientTest.js', ['client']);
	api.addFiles('tests/server/sampleServerTest.js', ['server']);

});
