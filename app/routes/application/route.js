import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),
  firebase: Ember.inject.service('firebase'),

  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      return this.get("session").fetch()
        .then(() => {
          let uid = this.get('session.content.uid');
          return this.get('store').find('user', uid)
            .then((user) => {
              this.set('session.content.user', user);
              if (transition.targetName === 'login') {
                transition.abort();
                this.transitionTo('schedule');
                return true;
              }
              return true;
            });
        })
        .catch(() => {
          if (transition.targetName !== 'login') {
            transition.abort();
            this.transitionTo('login');
            return false;
          }
          return true;
        });
    }
  },

  actions: {

    accessDenied: function() {
      this.transitionTo('login');
    },

    signOut: function() {
      this.get("session").close()
        .then(() => {
          this.transitionTo('goodbye');
        });
    }
  }
});
