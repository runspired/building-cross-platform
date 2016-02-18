import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  firebase: Ember.inject.service('firebase'),

  email: null,
  password: null,

  isCreating: false,
  isCompleting: false,

  actions: {

    toggleCreate() {
      this.toggleProperty('isCreating');
    },

    login(email, password) {
      let options = {
        provider: 'password',
        email,
        password
      };

      this.get('session').open("firebase", options)
        .then(function(data) {
          this.transitionTo('index');
        }).catch(function(error) {
          debugger;
        });
    },

    createUser(email, password) {
      this.get('firebase').createUser({ email, password },
        (error, data) => {
          if (error) {
            switch (error.code) {
              case "EMAIL_TAKEN":
                console.log("The new user account cannot be created because the email is already in use.");
                break;
              case "INVALID_EMAIL":
                console.log("The specified email is not a valid email.");
                break;
              default:
                console.log("Error creating user:", error);
            }
          } else {
            this.set('model.uid', data.uid);
            this.set('model.id', data.uid);
            this.set('model.email', email);

            this.set('isCompleting', true);
          }
        });
    },

    completeSetup(model) {
      this.set('isCompleting', false);
      /*
      model.save()
        .then(() => {
          this.set('session.content.user', model);
          this.transitionTo('index');
        });
        */
    }

  }


});
