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
    },
    show: function(){
        return !Session.get("edit");
    },
    back: function(){
        if(Session.get("edit") === true){
            return "/users/show/"+FlowRouter.getParam("userId");
        }else{
            return "/users";
        }
    },
    backIcon: function(){
        if(Session.get("edit")){
            //if(Session.get("mobile") === true){
                return "mdi-navigation-arrow-back";
            //}else{
            //    return "mdi-navigation-arrow-forward";
            //}
        }else{
            if(Session.get("mobile") === true){
                return "mdi-navigation-arrow-back";
            }else{
                return "mdi-navigation-close";
            }
        }
    }
});

Template.sideBarElement.events({
});

Template.sideBarElement.rendered = function(){
    var mq = window.matchMedia('all and (max-width: 600px)');
    function resize(){
        if(mq.matches) {
            Session.set("mobile", true);
            $('#sidebar').removeClass("z-depth-2");
            $('#closeIcon').removeClass("mdi-navigation-close");
            $('#closeIcon').addClass("mdi-navigation-arrow-back");
        } else {
            Session.set("mobile", false);
            $('#sidebar').addClass("z-depth-2");
            $('#closeIcon').removeClass("mdi-navigation-arrow-back");
            if(Session.get("edit")){
                $('#closeIcon').addClass("mdi-navigation-arrow-back");
            }else{
                $('#closeIcon').addClass("mdi-navigation-close");
            }
        }
    }
    window.addEventListener ('resize', resize, true);

    resize();
};