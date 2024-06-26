/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Client } from 'src/client/entities/client.entity';
import {
  SaleArticle,
  SaleArticleAtributes,
} from '../../sale-article/entities/sale-article.entity';

export interface SaleAtributes extends GeneralAtributes {
  id: number;
  date: Date;
  total: number;
  client_id: number;
  sale_articles?: SaleArticleAtributes[];
}

interface SaleCreationAttributes
  extends Optional<
    SaleAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}
@Table({
  tableName: 'sale',
  timestamps: true,
  paranoid: true,
})
export class Sale extends Model<SaleAtributes, SaleCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.FLOAT)
  total: number;

  @HasMany(() => SaleArticle)
  sale_articles?: SaleArticle[];

  @ForeignKey(() => Client)
  @Column(DataType.INTEGER)
  client_id: number;

  @BelongsTo(() => Client)
  client: Client;
}
