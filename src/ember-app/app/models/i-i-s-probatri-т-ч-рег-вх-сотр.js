import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧРегВхСотрMixin
} from '../mixins/regenerated/models/i-i-s-probatri-т-ч-рег-вх-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧРегВхСотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
