import {
  defineNamespace,
  defineProjections,
  Model as ФормаРегКартMixin
} from '../mixins/regenerated/models/i-i-s-probatri-форма-рег-карт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормаРегКартMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
