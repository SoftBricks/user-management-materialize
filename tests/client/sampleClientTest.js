describe('create a user as admin', function () {
	    before(function (done) {
  		Meteor.call('createUsers', function () {
    Meteor.loginWithPassword('admin', 'admin', done);
  });
});
  it('should create a user', function (done) {
    var user = {
			            username: 'test',
			            emails: [
  {
    address: 'test@test.de'
  }
],
			            password: 'test',
			            profile: {
				    fullname: 'testtest'
			}
		        };
    Meteor.users.insert(user, done);
  });
  after(function (done) {
    Meteor.logout();
    Meteor.call('removeTestUser', done);
  });
});

describe('update a user as admin', function () {
	    before(function (done) {
  		Meteor.call('createUsers', function () {
    Meteor.loginWithPassword('admin', 'admin', done);
  });
});
  it('should update a user', function (done) {
    var userUpdate = {
      $set:{
  			            'profile.fullname': 'useruser'
      }
		        };
    Meteor.users.update({ _id: 'user' }, userUpdate, done);
  });
  after(function (done) {
    Meteor.logout();
    Meteor.call('removeTestUser', done);
  });
});

describe('create a user as non-admin', function () {
	    before(function (done) {
  		Meteor.call('createUsers', function () {
    Meteor.loginWithPassword('user', 'user', done);
  });
});
  it('should not create a user', function (done) {
    var user = {
			            username: 'test',
			            emails: [
  {
    address: 'test@test.de'
  }
],
			            password: 'test',
			            profile: {
				    fullname: 'testtest'
			}
		        };
    Meteor.users.insert(user, function (err) {
      try {
        expect(err).to.be.an.instanceof(Meteor.Error);
      } catch (e) {
        done(e);
      }
      done();
    });
  });
  after(function (done) {
    Meteor.logout();
    Meteor.call('removeTestUser', done);
  });
});
