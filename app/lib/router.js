Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home'
});

Router.route('/channel/:name', {
  name: 'channel'
});
