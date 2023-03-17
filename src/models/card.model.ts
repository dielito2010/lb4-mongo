import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Category} from './category.model';

@model({settings: {strict: false, strictObjectIDCoercion: true}})
export class Card extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl: string;

  // foreign key
  @belongsTo(() => Category,
   {}, //relation metadata goes in here
   {// property definition goes in here
    mongodb: {dataType: 'ObjectId'}
  })
  CategoryId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Card>) {
    super(data);
  }
}

export interface CardRelations {
  // describe navigational properties here
}

export type CardWithRelations = Card & CardRelations;
