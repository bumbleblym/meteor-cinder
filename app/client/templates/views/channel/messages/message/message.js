Template.message.helpers({
  username: function() {
    return Meteor.users.findOne(this.userId, {
      username: true
    }).username;
  },
  datetime: function() {
    return moment(this.createdAt).format('MMMM Do, h:mm A');
  }
});
