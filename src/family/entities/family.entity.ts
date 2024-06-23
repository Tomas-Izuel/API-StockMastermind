/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Article } from 'src/article/entities/article.entity';

export interface FamilyAtributes extends GeneralAtributes {
  id: number;
  name: string;
}

interface FamilyCreationAttributes
  extends Optional<
    FamilyAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'family',
  timestamps: true,
  paranoid: true,
})
export class Family extends Model<FamilyAtributes, FamilyCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Article)
  articles: Article[];
}
