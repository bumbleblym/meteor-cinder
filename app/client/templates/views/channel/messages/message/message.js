Template.message.helpers({
  username: function() {
    return Meteor.users.findOne(this.userId, {
      username: true
    }).username;
  }
});
