import Ember from 'ember';

export default Ember.Component.extend({

  save: null,
  participant: null,
  firstName: null,
  _firstName: Ember.computed.oneWay('firstName'),

  actions: {

    complete(value) {
      this.sendAction('save', this.get('participant'), value);
    }

  }
});
