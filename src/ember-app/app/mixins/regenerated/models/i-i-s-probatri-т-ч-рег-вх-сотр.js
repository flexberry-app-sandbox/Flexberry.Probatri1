import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-probatri-сотрудник', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-probatri-форма-рег-входа', { inverse: 'тЧРегВхСотр', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-сотр.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-сотр.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегВхСотрE', 'i-i-s-probatri-т-ч-рег-вх-сотр', {
    сотрудник: belongsTo('i-i-s-probatri-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фамилия' })
  });
};
