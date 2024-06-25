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
  description: string;
  brand: string;
  storage_cost: number;
  family?: FamilyAtributes;
  family_id: number;
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
  description: string;

  @Column(DataType.STRING)
  brand: string;

  @Column(DataType.FLOAT)
  storage_cost: number;

  @ForeignKey(() => Family)
  @Column(DataType.INTEGER)
  family_id: number;

  @BelongsTo(() => Family)
  family: Family;
  @HasMany(() => ProviderArticle)
  provider_articles: ProviderArticle[];
}
