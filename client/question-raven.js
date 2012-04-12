Template.hello.show = function () {
  return Session.get('user_id') == null;
};

Template.dashboard.show = function () {
  return Session.get('user_id') != null;
};

Template.right_nav.show = function () {
  return Session.get('user_id') != null;
};

Template.hello.events = {
  'click #login' : function () {
    Session.set('user_id', 1);
  }
};

Template.right_nav.events = {
  'click #logout' : function () {
    Session.set('user_id', null);
  }
};
