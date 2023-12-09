import {
  defineNamespace,
  defineProjections,
  Model as ТЧРегВхСотрMixin
} from '../mixins/regenerated/models/i-i-s-probatri-т-ч-рег-вх-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРегВхСотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
