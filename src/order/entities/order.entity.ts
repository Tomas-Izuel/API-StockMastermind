import { Optional } from 'sequelize';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Article } from 'src/article/entities/article.entity';
import GeneralAttributes from 'src/dtos/general';
import { OrderStatus } from 'src/order-status/entities/order-status.entity';
import { Provider } from 'src/provider/entities/provider.entity';

export interface OrderAttributes extends GeneralAttributes {
  id: number;
  quantity: number;
  subtotal: number;
  total: number;
  provider_id: number;
  article_id: number;
  status_id: number;
}

export interface OrderCreationAttributes
  extends Optional<
    OrderAttributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}
@Table({
  tableName: 'order',
  timestamps: true,
  paranoid: true,
})
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;
  @Column(DataType.INTEGER)
  quantity: number;
  @Column(DataType.FLOAT)
  subtotal: number;
  @Column(DataType.FLOAT)
  total: number;
  @ForeignKey(() => Provider)
  @Column(DataType.INTEGER)
  provider_id: number;
  @ForeignKey(() => Article)
  @Column(DataType.INTEGER)
  article_id: number;
  @ForeignKey(() => OrderStatus)
  @Column(DataType.INTEGER)
  status_id: number;

  @BelongsTo(() => Provider)
  provider: Provider;
}
