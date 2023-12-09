import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-probatri-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probatri-карты', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-probatri-форма-рег-входа', { inverse: 'тЧРегВхГост', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-гост.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-гост.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-гост.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегВхГостE', 'i-i-s-probatri-т-ч-рег-вх-гост', {
    гость: belongsTo('i-i-s-probatri-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' }),
    карты: belongsTo('i-i-s-probatri-карты', 'Карты', {
      кодКарты: attr('Код карты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКарты' })
  });
};
