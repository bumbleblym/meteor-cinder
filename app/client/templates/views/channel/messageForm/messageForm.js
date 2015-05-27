Template.messageForm.events({
  'submit form': function(event, instance) {
    event.preventDefault();

    var input = event.target.content;
    var content = input.value.trim();
    input.value = '';

    if (content !== '') {
      Messages.insert({
        userId: Meteor.userId(),
        channel: Router.current().params.name,
        content: content,
        createdAt: new Date()
      });

      var $messages =  $('.main .messages');
      $messages.scrollTop($messages[0].scrollHeight);
    }
  }
});
