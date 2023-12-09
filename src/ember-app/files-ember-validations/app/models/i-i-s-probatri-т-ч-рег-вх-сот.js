import {
  defineNamespace,
  defineProjections,
  Model as ТЧРегВхСотMixin
} from '../mixins/regenerated/models/i-i-s-probatri-т-ч-рег-вх-сот';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРегВхСотMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
