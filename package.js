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

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.use(['templating'], 'client');
  api.use('softbricks:user-management', ['client', 'server']);
  api.use('materialize:materialize',['client']);
  api.use('fastclick', ['client']);
  api.imply('softbricks:user-management@0.0.1', ['client', 'server']);
  api.addFiles(['lib/style.css'], 'client');
  api.addFiles(['lib/templates/users/showUsers.html'], 'client');
  api.addFiles(['lib/templates/users/showUsers.js'], 'client');
  api.addFiles(['lib/templates/users/sideBarElement.html'], 'client');
  api.addFiles(['lib/templates/users/sideBarElement.js'], 'client');
  api.addFiles(['lib/templates/users/showUser.html','lib/templates/users/showUser.js'], 'client');
  api.addFiles(['lib/templates/users/editUser.html','lib/templates/users/editUser.js'], 'client');
  api.addFiles(['lib/templates/users/createUser.html','lib/templates/users/createUser.js'], 'client');
  api.addFiles(['lib/templates/groups/showGroups.html','lib/templates/groups/showGroups.js'], 'client');


});

Package.onTest(function(api) {

  api.use(['mike:mocha-package@0.5.6', "practicalmeteor:chai"]);
  api.use('softbricks:user-management', ['client', 'server']);
  api.use(['accounts-password']);
  api.use('meteorhacks:flow-router');

  api.addFiles('tests/client/sampleClientTest.js', ['client']);
  api.addFiles('tests/server/sampleServerTest.js', ['server']);

});
