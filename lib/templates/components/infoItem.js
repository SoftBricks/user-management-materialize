var helpers = {
  data: function() {
      var data = AutoView.getData(Template.instance());
      return data;
  },
  label: function() {
    var schema = new SimpleSchema(this.schema);
    var schemaForField = AutoForm.Utility.getDefs(schema, Template.instance().data.name);
    return schemaForField.label();
  },
  value: function() {
    return deepen(this.doc, Template.instance().data.name);
  }
};

Template.infoItem.helpers(helpers);

AutoView = {};
AutoView.getData = function(context) {
  var view = context.view;
  while (view && view.name !== 'Template.autoView') {
    view = view.originalParentView || view.parentView;
  }
  return Blaze.getData(view);
};

function deepen(t, keyString) {
    keys = keyString.split('.').reverse();
    while (keys.length) {
      var key = keys.pop();
      if(key === '$'){
        t = t[0] = t[0] || {};
      }else{
        t = t[key] = t[key] || {};
      }
    }
    if($.isEmptyObject(t)){
      return 'N/A';
    }
    return t;
}
