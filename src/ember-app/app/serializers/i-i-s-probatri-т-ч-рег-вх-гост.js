import { Serializer as ТЧРегВхГостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probatri-т-ч-рег-вх-гост';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧРегВхГостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
