import { Injectable } from '@nestjs/common';
import { DemandHistory } from './entities/demand-history.entity';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';

@Injectable()
export class DemandHistory {}
