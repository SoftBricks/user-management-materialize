Template.autoView.helpers({
  atts: function() {
    var htmlAttributes = {}, context = this;
    var removeProps = [
      "schema",
      "collection",
      "doc"
    ];
    // Filter out any attributes that have a component prefix
    function hasComponentPrefix(prop) {
      return _.any(AutoForm.Utility.componentTypeList, function (componentType) {
        return prop.indexOf(componentType + '-') === 0;
      });
    }
    // Filter out arrays and objects, which are obviously not meant to be
    // HTML attributes.
    for (var prop in context) {
      if (context.hasOwnProperty(prop) &&
          !_.contains(removeProps, prop) &&
          !hasComponentPrefix(prop)) {
        val = context[prop];
        if (!_.isArray(val) && !_.isObject(val)) {
          htmlAttributes[prop] = val;
        }
      }
    }
    return htmlAttributes;
  }
});

Template.autoView.created = function() {
  var template = this;

  template.autorun(function (c) {
    var data = Template.currentData(); // rerun when current data changes
    var formId = data.id;

    if (!formId) {
      throw new Error('Every autoView must have an "id" attribute set to a unique string.');
    }
  });
};
