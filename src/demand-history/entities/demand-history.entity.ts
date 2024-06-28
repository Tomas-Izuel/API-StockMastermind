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
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Article, ArticleAtributes } from 'src/article/entities/article.entity';

export interface DemandHistoryAtributes extends GeneralAtributes {
  id: number;
  period: Date;
  quantity_demand: number;
  article_id: number;
  article?: ArticleAtributes;
}

interface DemandHistoryCreationAttributes
  extends Optional<
    DemandHistoryAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'demand_history',
  timestamps: true,
  paranoid: true,
})
export class DemandHistory extends Model<
  DemandHistoryAtributes,
  DemandHistoryCreationAttributes
> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
    
    @Column(DataType.DATE)
    period: Date;
    
    @Column(DataType.INTEGER)
    quantity_demand: number;
    
    @ForeignKey(() => Article)
    @Column(DataType.INTEGER)
    article_id: number;
    
    @BelongsTo(() => Article)
    article: Article;

    @Column(DataType.DATE)
    created_at: Date;

    @Column(DataType.DATE)
    updated_at: Date;

    @Column(DataType.DATE)
    deleted_at: Date;
}
