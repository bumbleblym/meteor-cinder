function setMessagesHeight() {
  var navbarHeight = 50,
    $main = $('.main'),
    headerHeight = 50,
    formHeight = $main.children('form').outerHeight(true),
    $messages = $main.children('.messages');

  $messages.css('height', ($(window).height() - navbarHeight - headerHeight - 
    formHeight) + 'px');
}

Template.channel.onRendered(function() {
    setMessagesHeight();

    $(window).resize(function() {
      setMessagesHeight();
    });
});

Template.channel.helpers({
  channel: function() {
    return Channels.findOne({
      name: Router.current().params.name
    });
  }
});
