import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('conversations', function() {
    this.route('single', { path: 'single/:id'});
    this.route('new');
    this.route('index', { path: '/' });
  });
});

export default Router;
