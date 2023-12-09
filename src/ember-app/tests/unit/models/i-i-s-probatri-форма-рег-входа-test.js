import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probatri-форма-рег-входа', 'Unit | Model | i-i-s-probatri-форма-рег-входа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probatri-гость',
    'model:i-i-s-probatri-должности',
    'model:i-i-s-probatri-карты',
    'model:i-i-s-probatri-комната',
    'model:i-i-s-probatri-сотрудник',
    'model:i-i-s-probatri-т-ч-рег-вх-гост',
    'model:i-i-s-probatri-т-ч-рег-вх-сот',
    'model:i-i-s-probatri-т-ч-рег-вх-сотр',
    'model:i-i-s-probatri-форма-рег-входа',
    'model:i-i-s-probatri-форма-рег-карт',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
