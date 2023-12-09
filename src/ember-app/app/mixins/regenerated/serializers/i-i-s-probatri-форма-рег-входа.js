import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      комната: { serialize: 'odata-id', deserialize: 'records' },
      тЧРегВхСот: { serialize: false, deserialize: 'records' },
      тЧРегВхСотр: { serialize: false, deserialize: 'records' },
      тЧРегВхГост: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
