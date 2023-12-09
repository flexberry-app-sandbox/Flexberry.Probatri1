import {
  defineNamespace,
  defineProjections,
  Model as ФормаРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-probatri-форма-рег-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормаРегВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
