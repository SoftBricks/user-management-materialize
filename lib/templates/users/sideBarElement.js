Template.sideBarElement.helpers({
    'user': function () {
        var currentUser = Session.get("currentUser");
        return Meteor.users.findOne({_id: currentUser});
    },
    'email': function(){
        return this.emails[0].address;
    }
});

Template.sideBarElement.events({
   'click #closeSideBar': function(e){
       $('#pagination').addClass("l12");
       $('#pagination').removeClass("l8");
       $('#sidebar').addClass("hide");
       $('#sidebar').removeClass('col l4 z-depth-2');
       Session.set("currentUser","");
   }
});