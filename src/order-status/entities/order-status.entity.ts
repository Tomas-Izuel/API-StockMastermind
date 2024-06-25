import { Optional } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  PrimaryKey,
  Table,
  UpdatedAt,
  Model,
} from 'sequelize-typescript';
import GeneralAttributes from 'src/dtos/general';

export interface OrderStatusAttributes extends GeneralAttributes {
  id: number;
  name: string;
  is_default?: boolean;
}

export interface OrderStatusCreationAttributes
  extends Optional<
    OrderStatusAttributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'order_status',
  timestamps: true,
  paranoid: true,
})
export class OrderStatus extends Model<
  OrderStatusAttributes,
  OrderStatusCreationAttributes
> {
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
