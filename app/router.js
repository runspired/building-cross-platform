import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('participant', { path: '/:id' });

  this.route('participants', function() {
    this.route('single', { path: '/:id' });
    this.route('edit');
    this.route('index');
  });

  this.route('login');
});

export default Router;
