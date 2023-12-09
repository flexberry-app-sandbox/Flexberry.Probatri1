import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbatriГостьLForm from './forms/i-i-s-probatri-гость-l';
import IISProbatriДолжностиLForm from './forms/i-i-s-probatri-должности-l';
import IISProbatriКартыLForm from './forms/i-i-s-probatri-карты-l';
import IISProbatriКомнатаLForm from './forms/i-i-s-probatri-комната-l';
import IISProbatriСотрудникLForm from './forms/i-i-s-probatri-сотрудник-l';
import IISProbatriФормаРегВходаLForm from './forms/i-i-s-probatri-форма-рег-входа-l';
import IISProbatriФормаРегКартLForm from './forms/i-i-s-probatri-форма-рег-карт-l';
import IISProbatriГостьEForm from './forms/i-i-s-probatri-гость-e';
import IISProbatriДолжностиEForm from './forms/i-i-s-probatri-должности-e';
import IISProbatriКартыEForm from './forms/i-i-s-probatri-карты-e';
import IISProbatriКомнатаEForm from './forms/i-i-s-probatri-комната-e';
import IISProbatriСотрудникEForm from './forms/i-i-s-probatri-сотрудник-e';
import IISProbatriФормаРегВходаEForm from './forms/i-i-s-probatri-форма-рег-входа-e';
import IISProbatriФормаРегКартEForm from './forms/i-i-s-probatri-форма-рег-карт-e';
import IISProbatriГостьModel from './models/i-i-s-probatri-гость';
import IISProbatriДолжностиModel from './models/i-i-s-probatri-должности';
import IISProbatriКартыModel from './models/i-i-s-probatri-карты';
import IISProbatriКомнатаModel from './models/i-i-s-probatri-комната';
import IISProbatriСотрудникModel from './models/i-i-s-probatri-сотрудник';
import IISProbatriТЧРегВхГостModel from './models/i-i-s-probatri-т-ч-рег-вх-гост';
import IISProbatriТЧРегВхСотModel from './models/i-i-s-probatri-т-ч-рег-вх-сот';
import IISProbatriТЧРегВхСотрModel from './models/i-i-s-probatri-т-ч-рег-вх-сотр';
import IISProbatriФормаРегВходаModel from './models/i-i-s-probatri-форма-рег-входа';
import IISProbatriФормаРегКартModel from './models/i-i-s-probatri-форма-рег-карт';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probatri-гость': IISProbatriГостьModel,
    'i-i-s-probatri-должности': IISProbatriДолжностиModel,
    'i-i-s-probatri-карты': IISProbatriКартыModel,
    'i-i-s-probatri-комната': IISProbatriКомнатаModel,
    'i-i-s-probatri-сотрудник': IISProbatriСотрудникModel,
    'i-i-s-probatri-т-ч-рег-вх-гост': IISProbatriТЧРегВхГостModel,
    'i-i-s-probatri-т-ч-рег-вх-сот': IISProbatriТЧРегВхСотModel,
    'i-i-s-probatri-т-ч-рег-вх-сотр': IISProbatriТЧРегВхСотрModel,
    'i-i-s-probatri-форма-рег-входа': IISProbatriФормаРегВходаModel,
    'i-i-s-probatri-форма-рег-карт': IISProbatriФормаРегКартModel
  },

  'application-name': 'Probatri',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probatri',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probatri',
          title: 'Probatri'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        probatri: {
          caption: 'Probatri',
          title: 'Probatri',
          'i-i-s-probatri-форма-рег-входа-l': {
            caption: 'Форма рег входа',
            title: ''
          },
          'i-i-s-probatri-карты-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-probatri-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-probatri-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-probatri-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-probatri-форма-рег-карт-l': {
            caption: 'Форма рег карт',
            title: ''
          },
          'i-i-s-probatri-гость-l': {
            caption: 'Гость',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probatri-гость-l': IISProbatriГостьLForm,
    'i-i-s-probatri-должности-l': IISProbatriДолжностиLForm,
    'i-i-s-probatri-карты-l': IISProbatriКартыLForm,
    'i-i-s-probatri-комната-l': IISProbatriКомнатаLForm,
    'i-i-s-probatri-сотрудник-l': IISProbatriСотрудникLForm,
    'i-i-s-probatri-форма-рег-входа-l': IISProbatriФормаРегВходаLForm,
    'i-i-s-probatri-форма-рег-карт-l': IISProbatriФормаРегКартLForm,
    'i-i-s-probatri-гость-e': IISProbatriГостьEForm,
    'i-i-s-probatri-должности-e': IISProbatriДолжностиEForm,
    'i-i-s-probatri-карты-e': IISProbatriКартыEForm,
    'i-i-s-probatri-комната-e': IISProbatriКомнатаEForm,
    'i-i-s-probatri-сотрудник-e': IISProbatriСотрудникEForm,
    'i-i-s-probatri-форма-рег-входа-e': IISProbatriФормаРегВходаEForm,
    'i-i-s-probatri-форма-рег-карт-e': IISProbatriФормаРегКартEForm
  },

});

export default translations;
