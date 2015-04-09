Template.sideBarElement.helpers({
    'user': function () {
        var currentUser = FlowRouter.getParam('userId');
        var user = Meteor.users.findOne({_id: currentUser});
        if(typeof user !== "undefined")
            return user;
        return false;
    },
    'email': function(){
        return this.emails[0].address;
    },
    currentUser: function(){
        return FlowRouter.getParam('userId');
    },
    edit: function(){
        return Session.get("edit");
    }
});

Template.sideBarElement.events({
});

Template.sideBarElement.rendered = function(){
    var mq = window.matchMedia('all and (max-width: 600px)');
    function resize(){
        if(mq.matches) {
            $('#sidebar').removeClass("z-depth-2");
            $('#closeIcon').removeClass("mdi-navigation-arrow-forward");
            $('#closeIcon').addClass("mdi-navigation-arrow-back");
        } else {
            $('#sidebar').addClass("z-depth-2");
            $('#closeIcon').removeClass("mdi-navigation-arrow-back");
            $('#closeIcon').addClass("mdi-navigation-arrow-forward");
        }
    }
    window.addEventListener ('resize', resize, true);

    if(mq.matches) {
        $('#sidebar').removeClass("z-depth-2");
        $('#closeIcon').removeClass("mdi-navigation-arrow-forward");
        $('#closeIcon').addClass("mdi-navigation-arrow-back");
    } else {
        $('#sidebar').addClass("z-depth-2");
        $('#closeIcon').removeClass("mdi-navigation-arrow-back");
        $('#closeIcon').addClass("mdi-navigation-arrow-forward");
    }
};