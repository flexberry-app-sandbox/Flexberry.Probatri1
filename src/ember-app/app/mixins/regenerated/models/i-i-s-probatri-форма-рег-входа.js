import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  комната: DS.belongsTo('i-i-s-probatri-комната', { inverse: null, async: false }),
  тЧРегВхСот: DS.hasMany('i-i-s-probatri-т-ч-рег-вх-сот', { inverse: 'формаРегВхода', async: false }),
  тЧРегВхСотр: DS.hasMany('i-i-s-probatri-т-ч-рег-вх-сотр', { inverse: 'формаРегВхода', async: false }),
  тЧРегВхГост: DS.hasMany('i-i-s-probatri-т-ч-рег-вх-гост', { inverse: 'формаРегВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-входа.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧРегВхСот: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-входа.validations.тЧРегВхСот.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧРегВхСотр: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-входа.validations.тЧРегВхСотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧРегВхГост: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-входа.validations.тЧРегВхГост.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегВходаE', 'i-i-s-probatri-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probatri-комната', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    тЧРегВхСотр: hasMany('i-i-s-probatri-т-ч-рег-вх-сотр', 'Т ч рег вх сотр', {
      сотрудник: belongsTo('i-i-s-probatri-сотрудник', 'Сотрудник', {
        фамилия: attr('Фамилия', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фамилия' })
    }),
    тЧРегВхГост: hasMany('i-i-s-probatri-т-ч-рег-вх-гост', 'Т ч рег вх гост', {
      гость: belongsTo('i-i-s-probatri-гость', 'Гость', {
        фамилия: attr('Фамилия', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фамилия' }),
      карты: belongsTo('i-i-s-probatri-карты', 'Карты', {
        кодКарты: attr('Код карты', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'кодКарты' })
    })
  });

  modelClass.defineProjection('ФормаРегВходаL', 'i-i-s-probatri-форма-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комната: belongsTo('i-i-s-probatri-комната', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
