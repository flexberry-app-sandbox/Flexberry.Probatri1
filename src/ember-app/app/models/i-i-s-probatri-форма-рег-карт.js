import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормаРегКартMixin
} from '../mixins/regenerated/models/i-i-s-probatri-форма-рег-карт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормаРегКартMixin, Validations, {
});

defineProjections(Model);

export default Model;
