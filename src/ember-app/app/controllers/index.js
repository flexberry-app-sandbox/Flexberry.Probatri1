import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.probatri.caption'),
          title: i18n.t('forms.application.sitemap.probatri.title'),
          children: [{
            link: 'i-i-s-probatri-форма-рег-входа-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-форма-рег-входа-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-форма-рег-входа-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-probatri-карты-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-карты-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-probatri-комната-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-комната-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-probatri-должности-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-probatri-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-сотрудник-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-probatri-форма-рег-карт-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-форма-рег-карт-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-форма-рег-карт-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-probatri-гость-l',
            caption: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.probatri.i-i-s-probatri-гость-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})