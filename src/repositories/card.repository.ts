import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Card, CardRelations} from '../models';

export class CardRepository extends DefaultCrudRepository<
  Card,
  typeof Card.prototype._id,
  CardRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Card, dataSource);
  }
}
