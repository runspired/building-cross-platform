import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createConversation(name) {
      this.get('store').createRecord('conversation', { name })
        .save()
        .then((record) => {
          this.transitionTo('conversations.single', record);
        });
    }
  }

});
