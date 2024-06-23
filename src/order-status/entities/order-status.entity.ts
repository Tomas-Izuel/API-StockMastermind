import { Model } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';

export class OrderStatus extends Model {
  @Column(DataType.STRING)
  name: string;
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;
  @Column(DataType.BOOLEAN)
  is_default?: boolean;

  @CreatedAt
  @Column(DataType.DATE)
  created_at!: Date;

  @UpdatedAt
  @AllowNull
  @Column(DataType.DATE)
  updated_at!: Date;

  @DeletedAt
  @AllowNull
  @Column(DataType.DATE)
  deleted_at?: Date;
}
