import Ember from 'ember';
//import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend({
  participant: null,
  classNames: ['participant-card'],
  recognizers: 'pan press',

  panLeft() {
    this.set('isExpanded', false);
  },

  panRight() {
    this.set('isExpanded', true);
  },

  press() {
    this.toggleProperty('isExpanded');
  },

  isExpanded: false,
  saveUser: null,

  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    }
  }

});
