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
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Sale } from 'src/sale/entities/sale.entity';
import { Article } from 'src/article/entities/article.entity';

export interface SaleArticleAtributes extends GeneralAtributes {
  id: number;
  quantity: number;
  price: number;
}

interface SaleArticleCreationAttributes
  extends Optional<
    SaleArticleAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}
@Table({
  tableName: 'sale_article',
  timestamps: true,
  paranoid: true,
})
export class SaleArticle extends Model<
  SaleArticleAtributes,
  SaleArticleCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.INTEGER)
  quantity: number;

  @Column(DataType.FLOAT)
  price: number;

  @ForeignKey(() => Sale)
  @Column(DataType.INTEGER)
  sale_id: number;

  @BelongsTo(() => Sale)
  sale: Sale;

  @ForeignKey(() => Article)
  @Column(DataType.INTEGER)
  article_id: number;

  @BelongsTo(() => Article)
  article: Article;
}
