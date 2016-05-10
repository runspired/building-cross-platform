import Ember from 'ember';

export default Ember.Route.extend({

  games: Ember.inject.service('games'),

  model(params) {

    return Ember.RSVP.hash({
      participant: this.get('store').find('participant', params.id),
      games: this.get('games').findAll()
    });
  }

});
