import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормаРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-probatri-форма-рег-входа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормаРегВходаMixin, Validations, {
});

defineProjections(Model);

export default Model;
