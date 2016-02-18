import DS from 'ember-data';
import Ember from 'ember';

const {
  computed
  } = Ember;

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  username: DS.attr(),
  uid: DS.attr(),

  // gravatar: DS.attr(),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
