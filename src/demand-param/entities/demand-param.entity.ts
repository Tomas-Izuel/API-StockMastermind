/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';

export interface DemandParamAtributes extends GeneralAtributes {
  id: number;
  error_aceptable: number;
}

interface DemandParamCreationAttributes
  extends Optional<
    DemandParamAtributes,
    'id' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'demand_params',
  timestamps: true,
  paranoid: true,
})
export class DemandParam extends Model<
  DemandParamAtributes,
  DemandParamCreationAttributes
> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.FLOAT)
  error_aceptable: number;
}
