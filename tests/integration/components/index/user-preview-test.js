import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('index/user-preview', 'Integration | Component | index/user preview', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{index/user-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#index/user-preview}}
      template block text
    {{/index/user-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
