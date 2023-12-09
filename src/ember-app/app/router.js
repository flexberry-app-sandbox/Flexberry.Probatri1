import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probatri-гость-l');
  this.route('i-i-s-probatri-гость-e',
  { path: 'i-i-s-probatri-гость-e/:id' });
  this.route('i-i-s-probatri-гость-e.new',
  { path: 'i-i-s-probatri-гость-e/new' });
  this.route('i-i-s-probatri-должности-l');
  this.route('i-i-s-probatri-должности-e',
  { path: 'i-i-s-probatri-должности-e/:id' });
  this.route('i-i-s-probatri-должности-e.new',
  { path: 'i-i-s-probatri-должности-e/new' });
  this.route('i-i-s-probatri-карты-l');
  this.route('i-i-s-probatri-карты-e',
  { path: 'i-i-s-probatri-карты-e/:id' });
  this.route('i-i-s-probatri-карты-e.new',
  { path: 'i-i-s-probatri-карты-e/new' });
  this.route('i-i-s-probatri-комната-l');
  this.route('i-i-s-probatri-комната-e',
  { path: 'i-i-s-probatri-комната-e/:id' });
  this.route('i-i-s-probatri-комната-e.new',
  { path: 'i-i-s-probatri-комната-e/new' });
  this.route('i-i-s-probatri-сотрудник-l');
  this.route('i-i-s-probatri-сотрудник-e',
  { path: 'i-i-s-probatri-сотрудник-e/:id' });
  this.route('i-i-s-probatri-сотрудник-e.new',
  { path: 'i-i-s-probatri-сотрудник-e/new' });
  this.route('i-i-s-probatri-форма-рег-входа-l');
  this.route('i-i-s-probatri-форма-рег-входа-e',
  { path: 'i-i-s-probatri-форма-рег-входа-e/:id' });
  this.route('i-i-s-probatri-форма-рег-входа-e.new',
  { path: 'i-i-s-probatri-форма-рег-входа-e/new' });
  this.route('i-i-s-probatri-форма-рег-карт-l');
  this.route('i-i-s-probatri-форма-рег-карт-e',
  { path: 'i-i-s-probatri-форма-рег-карт-e/:id' });
  this.route('i-i-s-probatri-форма-рег-карт-e.new',
  { path: 'i-i-s-probatri-форма-рег-карт-e/new' });
});

export default Router;
