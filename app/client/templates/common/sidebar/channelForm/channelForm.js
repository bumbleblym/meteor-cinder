Template.channelForm.events({
  'submit form': function(event, instance) {
    event.preventDefault();

    var input = event.target.channelName;
    var name = input.value.trim().split(' ')[0];
    input.value = '';

    if (name !== '') {
      var channel = Channels.findOne({
        name: name
      });

      if (typeof channel === 'undefined') {
        Channels.insert({
          name: name
        });
      }
    }
  }
});
