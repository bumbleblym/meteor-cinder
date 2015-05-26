Template.channel.helpers({
  channel: function() {
    return Channels.findOne({
      name: Router.current().params.name
    });
  }
});
