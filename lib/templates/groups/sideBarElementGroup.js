Template.sideBarElementGroup.helpers({
    'group': function () {
        var currentUser = FlowRouter.getParam('groupId');
        var group = Groups.findOne({_id: currentUser});
        if(typeof group !== "undefined")
            return group;
        return false;
    },
    'email': function(){
        return this.emails[0].address;
    },
    currentGroup: function(){
        return FlowRouter.getParam('groupId');
    },
    edit: function(){
        return Session.get("edit");
    },
    show: function(){
        return !Session.get("edit");
    },
    back: function(){
        if(Session.get("edit") === true){
            return "/groups/show/"+FlowRouter.getParam("groupId");
        }else{
            return "/groups";
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

Template.sideBarElementGroup.events({
});

Template.sideBarElementGroup.rendered = function(){

};