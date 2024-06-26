import { Optional } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import GeneralAttributes from 'src/dtos/general';
import { ProviderArticle } from 'src/provider-article/entities/provider-article.entity';

export interface ProviderAttributes extends GeneralAttributes {
  cuit: number;
  id: number;
  name: string;
  shipping_time: number;
  shipping_cost: number;
  is_default?: boolean;
}

export interface ProviderCreationAttributes
  extends Optional<
    ProviderAttributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}
@Table({
  tableName: 'provider',
  timestamps: true,
  paranoid: true,
})
export class Provider extends Model<
  ProviderAttributes,
  ProviderCreationAttributes
> {
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
  is_default?: boolean;
  @HasMany(() => ProviderArticle)
  provider_articles: ProviderArticle[];
}
