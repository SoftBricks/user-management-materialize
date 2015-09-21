var helpers = {
    data: function () {
        var data = AutoView.getData(Template.instance());
        return data;
    },
    label: function () {
        var fieldDev = this.schema._schema[Template.instance().data.name];
        if (!!fieldDev) {
            return fieldDev.label();
        }
    },
    value: function () {
        if (!this.doc) {
            return;
        }
        return deepen(this.doc, Template.instance().data.name);
    }
};

Template.infoItem.helpers(helpers);

AutoView = {
    getData: function (context) {
      if(this.data){
          return this.data;
      }
      var view = context.view;
      while (view && view.name !== 'Template.autoView') {
          view = view.originalParentView || view.parentView;
      }
      this.data = Blaze.getData(view);
      return this.data;
    }
};

function deepen(t, keyString) {
    keys = keyString.split('.').reverse();
    while (keys.length) {
        var key = keys.pop();
        if (key === '$') {
            t = t[0] = t[0] || {};
        } else {
            t = t[key] = t[key] || {};
        }
    }
    if (_.isEqual(t, {})) {
        return 'N/A';
    }
    return t;
}
