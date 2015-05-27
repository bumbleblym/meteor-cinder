function setMessagesHeight() {
  var navbarHeight = 50,
    $main = $('.main'),
    headerHeight = 50,
    formHeight = $main.children('form').outerHeight(true),
    $messages = $main.children('.messages');

  console.log(headerHeight);
  console.log(formHeight);
  console.log($(window).height());

  $messages.css('height', ($(window).height() - navbarHeight - headerHeight - formHeight) + 'px');
}

Template.channel.onRendered(function() {
    setMessagesHeight();
});

Template.channel.helpers({
  channel: function() {
    return Channels.findOne({
      name: Router.current().params.name
    });
  }
});
