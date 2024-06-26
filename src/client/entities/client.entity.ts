/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import GeneralAtributes from '../../dtos/general';
import { Optional } from 'sequelize';
import { Sale } from 'src/sale/entities/sale.entity';

export interface ClientAtributes extends GeneralAtributes {
  cuit: number;
  name: string;
}

interface ClientCreationAttributes
  extends Optional<
    ClientAtributes,
    'cuit' | 'created_at' | 'updated_at' | 'deleted_at'
  > {}

@Table({
  tableName: 'client',
  timestamps: true,
  paranoid: true,
})
export class Client extends Model<ClientAtributes, ClientCreationAttributes> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  cuit: number;

  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Sale)
  sales: Sale[];
}
