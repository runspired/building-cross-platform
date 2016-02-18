import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').find('conversation', params.id);
  },

  actions: {

    sendMessage(text) {
      let user = this.get('session.content.user');
      let conversation = this.modelFor('conversations.single');

      this.get('store').createRecord('message', { text, user, conversation })
        .save()
        .then((/* record */) => {
          conversation.save();
        });

    }

  }


});
