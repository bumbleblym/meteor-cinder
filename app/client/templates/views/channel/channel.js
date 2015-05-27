function setMessagesHeight() {
  var navbarHeight = 50,
    $main = $('.main'),
    headerHeight = $main.children('.page-header').outerHeight(true),
    formHeight = $main.children('form').outerHeight(true),
    $messages = $main.children('.messages');

    console.log(headerHeight)

  $messages.css('height', ($(window).height() - navbarHeight - headerHeight - 
    formHeight) + 'px');
}

Template.channel.onRendered(function() {
    setMessagesHeight();

    $(window).resize(function() {
      setMessagesHeight();
    });

    var $messages =  $('.main .messages');
    $messages.scrollTop($messages[0].scrollHeight);
});

Template.channel.helpers({
  channel: function() {
    return Channels.findOne({
      name: Router.current().params.name
    });
  }
});
