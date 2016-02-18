import Ember from 'ember';

const {
  Controller,
  inject
  } = Ember;

export default Controller.extend({

  isCreating: false,

  session: inject.service('session'),
  firebase: inject.service('firebase'),

  email: null,
  password: null,

  actions: {

    toggleCreate() {
      this.toggleProperty('isCreating');
    },

    signIn(email, password) {

      if (this.get('session.isAuthenticated')) {
        return this.get('store').find('user', this.get('session.content.uid'))
          .then((user) => {
            this.set('session.content.user', user);
            this.transitionToRoute('index');
          });
      }

      this.get('session').open('firebase', {
        provider: 'password',
        email: String(email),
        password: String(password)
      }).then((data) => {
        this.get('store').find('user', data.uid)
          .then((user) => {
            this.set('session.content.user', user);
            this.transitionToRoute('index');
          });
      });
    },

    createUser(email, password) {
      var ref = this.get('firebase');
      ref.createUser({
        email: email,
        password: password
      }, (error, userData) => {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              alert("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              alert("The specified email is not a valid email.");
              break;
            default:
              alert("Error creating user:" + JSON.stringify(error, null, 2));
          }
        } else {
          alert("Successfully created user account with uid:" + userData.uid);
          this.set('model.id', userData.uid);
          this.set('model.uid', userData.uid);
          this.set('model.email', email);
          this.set('isCreating', false);
          this.set('isCompleting', true);
        }
      });
    },

    completeUser(model) {
      model.save();
      this.set('isCompleting', false);
    }

  }
});
