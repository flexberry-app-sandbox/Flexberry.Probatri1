import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  гость: DS.belongsTo('i-i-s-probatri-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probatri-карты', { inverse: null, async: false }),
  комната: DS.belongsTo('i-i-s-probatri-комната', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-probatri-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-карт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-карт.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-карт.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-карт.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probatri-форма-рег-карт.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегКартE', 'i-i-s-probatri-форма-рег-карт', {
    дата: attr('Дата', { index: 0 }),
    карты: belongsTo('i-i-s-probatri-карты', 'Карты', {
      кодКарты: attr('Код карты', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'кодКарты' }),
    комната: belongsTo('i-i-s-probatri-комната', 'Комната', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    гость: belongsTo('i-i-s-probatri-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    сотрудник: belongsTo('i-i-s-probatri-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ФормаРегКартL', 'i-i-s-probatri-форма-рег-карт', {
    дата: attr('Дата', { index: 0 }),
    карты: belongsTo('i-i-s-probatri-карты', 'Код карты', {
      кодКарты: attr('Код карты', { index: 1 })
    }, { index: -1, hidden: true }),
    комната: belongsTo('i-i-s-probatri-комната', 'Номер', {
      номер: attr('Номер', { index: 2 })
    }, { index: -1, hidden: true }),
    гость: belongsTo('i-i-s-probatri-гость', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    сотрудник: belongsTo('i-i-s-probatri-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
