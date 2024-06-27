/* eslint-disable @typescript-eslint/no-empty-interface */
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
  import GeneralAtributes from '../../dtos/general';
  import { Optional } from 'sequelize';
  import { DemandParam } from 'src/demand-param/entities/demand-param.entity';
  
  export interface PredictedDemandAtributes extends GeneralAtributes {
    id: number;
    period: Date;
    quantity: number;
    price_proyected?: number;
    calculated_error?: number;
    selected?: boolean;
    DemandParam_id?: number;
  }
  
  interface PredictedDemandCreationAttributes
    extends Optional<
      PredictedDemandAtributes, 
      'id' | 'created_at' | 'updated_at' | 'deleted_at'
    > {}
  
  @Table({
    tableName: 'predicted_demand',
    timestamps: true,
    paranoid: true,
  })
  export class PredictedDemand extends Model<
    PredictedDemandAtributes,
    PredictedDemandCreationAttributes
  > {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;
  
    @Column(DataType.DATE)
    period: Date;

    @Column(DataType.INTEGER)
    quantity: number;

    @Column(DataType.FLOAT)
    price_proyected: number;

    @Column(DataType.FLOAT)
    calculated_error: number;

    @Column(DataType.BOOLEAN)
    selected: boolean;

    @ForeignKey(() => DemandParam)
    @Column(DataType.INTEGER)
    demand_param_id: number;
    
    @BelongsTo(() => DemandParam)
    demand_param: DemandParam;
  }