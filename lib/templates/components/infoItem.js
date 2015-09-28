var helpers = {
    data: function () {
        var data = AutoView.getData(Template.instance());
        return data;
    },
    label: function () {
        var fieldName = Template.instance().data.name.replace('0', '$'),
            fieldDev = this.schema._schema[fieldName];
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
      var view = context.view;
      while (view && view.name !== 'Template.autoView') {
          view = view.originalParentView || view.parentView;
      }
      return Blaze.getData(view);
    }
};

function deepen(t, keyString) {
    keys = keyString.split('.').reverse();
    while (keys.length) {
        var key = keys.pop();
        if (key === '$') {
            t = t[0] = t[0] || {};
        } else {
            t = t[key] = t[key];
        }
    }
    if (_.isEqual(t, {})) {
        return 'N/A';
    }
    if (_.isBoolean(t)) {
        return t.toString();
    }
    return t;
}
