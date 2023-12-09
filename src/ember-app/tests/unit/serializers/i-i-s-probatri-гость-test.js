import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probatri-гость', 'Unit | Serializer | i-i-s-probatri-гость', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probatri-гость',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probatri-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
