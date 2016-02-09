import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
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

  actions: {
    toggleExpand() {
      this.toggleProperty('isExpanded');
    }
  }

});
