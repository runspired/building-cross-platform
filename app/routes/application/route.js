import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(transition) {
    if (!this.get('session.isAuthenticated')) {
      return this.get("session").fetch()
        .then(() => {
          if (transition.targetName === 'login') {
            transition.abort();
            this.transitionTo('index');
            return false;
          }
          return true;
        })
        .catch(() => {
          if (transition.targetName !== 'login') {
            transition.abort();
            this.transitionTo('login');
          }
          return false;
        });
    }
    return true;
  },

  actions: {
    logout() {
      this.get("session").close();
    }
  }

});
