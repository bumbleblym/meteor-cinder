Template.messages.helpers({
  messages: function() {
    return Messages.find({
      channel: Router.current().params.name
    });
  }
});
