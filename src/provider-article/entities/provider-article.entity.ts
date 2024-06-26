import { Optional } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Article } from 'src/article/entities/article.entity';
import GeneralAttributes from 'src/dtos/general';
import { Provider } from 'src/provider/entities/provider.entity';

export interface ProviderArticleAttributes extends GeneralAttributes {
  id: number;
  sale_price: number;
  security_stock: number;
  provider_id: number;
  article_id: number;
  max_stock: number;
  request_stock: number;
}

export interface ProviderArticleCreationAttributes
  extends Optional<
    ProviderArticleAttributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'provider_article',
  timestamps: true,
  paranoid: true,
})
export class ProviderArticle extends Model<
  ProviderArticleAttributes,
  ProviderArticleCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;
  @Column(DataType.FLOAT)
  sale_price!: number;

  @ForeignKey(() => Provider)
  @Column(DataType.INTEGER)
  provider_id!: number;
  @ForeignKey(() => Article)
  @Column(DataType.INTEGER)
  article_id!: number;
}
