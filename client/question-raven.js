
Users = new Meteor.Collection("users");

Template.hello.show = function () {
  return Session.get('user_id') == null;
};

Template.hello.invalid = function () {
  return Session.get('invalid') != null;
};

Template.dashboard.show = function () {
  return Session.get('user_id') != null;
};

Template.navbar.show = function () {
  return Session.get('user_id') != null;
};

Template.hello.events = {
  'click #login' : function () {
    var email = $('#email').val();
    var password = $('#password').val();
    if (false) {
      Session.set('user_id', 1);
    } else {
      Session.set('invalid', 1);
    }
  }
};

Template.navbar.events = {
  'click #logout' : function (e) {
    e.preventDefault();
    Session.set('invalid', null);
    Session.set('user_id', null);
  }
};
