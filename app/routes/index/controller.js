import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    updateUserFirstName(user, name) {
      user.set('firstName', name);
    }
  }

});
