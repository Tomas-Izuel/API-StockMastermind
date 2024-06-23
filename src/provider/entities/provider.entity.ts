import { Model } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

export class Provider extends Model {
  @Column(DataType.INTEGER)
  cuit!: number;
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;
  @Column(DataType.STRING)
  name!: string;
  @Column(DataType.INTEGER)
  shipping_time!: number;
  @Column(DataType.FLOAT)
  shipping_cost!: number;
  @Column(DataType.BOOLEAN)
  is_default: boolean;
}
