Template.hello.show = function () {
  return Session.get('user_id') == null;
};

Template.dashboard.show = function () {
  return Session.get('user_id') != null;
};

Template.hello.events = {
  'click #login' : function () {
    Session.set('user_id', 1)
  }
};
