/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Table,
  Column,
  Model,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Family, FamilyAtributes } from 'src/family/entities/family.entity';
import { ProviderArticle } from 'src/provider-article/entities/provider-article.entity';

export interface ArticleAtributes extends GeneralAtributes {
  id: number;
  name: string;
  model: string;
  brand: string;
  description: string;
  storage_cost: number;
  stock: number;
  price: number;
  security_stock?: number;
  max_stock?: number;
  family?: FamilyAtributes;
  family_id: number;
  request_point?: number;
}

interface ArticleCreationAttributes
  extends Optional<
    ArticleAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'article',
  timestamps: true,
  paranoid: true,
})
export class Article extends Model<
  ArticleAtributes,
  ArticleCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  model: string;

  @Column(DataType.STRING)
  brand: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.FLOAT)
  storage_cost: number;

  @Column(DataType.INTEGER)
  stock: number;

  @Column(DataType.FLOAT)
  price: number;

  @Column(DataType.INTEGER)
  security_stock: number;

  @Column(DataType.NUMBER)
  max_stock: number;

  @Column(DataType.INTEGER)
  request_point: number;

  @ForeignKey(() => Family)
  @Column(DataType.INTEGER)
  family_id: number;

  @BelongsTo(() => Family)
  family: Family;
  @HasMany(() => ProviderArticle)
  provider_articles: ProviderArticle[];
}
