import { Serializer as ФормаРегКартSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probatri-форма-рег-карт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормаРегКартSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
