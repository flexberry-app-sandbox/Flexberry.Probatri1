import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  примечания: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-probatri-сотрудник', { inverse: null, async: false }),
  формаРегВхода: DS.belongsTo('i-i-s-probatri-форма-рег-входа', { inverse: 'тЧРегВхСот', async: false })
});

export let ValidationRules = {
  примечания: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-сот.validations.примечания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-сот.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаРегВхода: {
    descriptionKey: 'models.i-i-s-probatri-т-ч-рег-вх-сот.validations.формаРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРегВхСотE', 'i-i-s-probatri-т-ч-рег-вх-сот', {
    примечания: attr('Примечания', { index: 0 }),
    сотрудник: belongsTo('i-i-s-probatri-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: 1, displayMemberPath: 'фамилия' })
  });
};
