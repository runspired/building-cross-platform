import Ember from 'ember';

const games = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' }
];

export default Ember.Service.extend({

  find(id) {
    if (this._cache[id]) {
      return this._cache[id];
    }
    for (let i = 0; i < games.length; i++) {
      if (games[i].id === id) {
        this._cache[id] = games[i];
        return games[i];
      }
    }
    return null;
  },

  findAll() {
    for (let i = 0; i < games.length; i++) {
      this._cache[games[i].id] = games[i];
    }
    return games;
  },

  _cache: null,

  init() {
    this._super();
    this._cache = {};
  }

});
