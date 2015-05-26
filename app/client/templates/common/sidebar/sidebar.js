Template.sidebar.helpers({
  channels: function() {
    var channels = [];

    _(10).times(function() {
      channels.push({
        name: Fake.word().toLowerCase()
      });
    });

    return channels;
  }
});
