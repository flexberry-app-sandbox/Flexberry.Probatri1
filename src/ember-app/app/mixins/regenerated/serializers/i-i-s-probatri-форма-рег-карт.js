import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      гость: { serialize: 'odata-id', deserialize: 'records' },
      карты: { serialize: 'odata-id', deserialize: 'records' },
      комната: { serialize: 'odata-id', deserialize: 'records' },
      сотрудник: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
