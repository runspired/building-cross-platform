import DS from 'ember-data';

export default DS.Model.extend({
  conversation: DS.belongsTo('conversation'),
  time: DS.attr('date', { defaultValue: (new Date()).toISOString() }),
  user: DS.belongsTo('user'),
  text: DS.attr()
});
