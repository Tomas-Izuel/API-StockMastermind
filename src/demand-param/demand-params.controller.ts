import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { DemandParamsService } from './demand-params.service';
import { CreateDemandParamDto } from './dto/create-demand-param.dto';
import { UpdateDemandParamDto } from './dto/update-demand-param.dto';

@Controller('demand-params')
export class DemandParamsController {
  constructor(private readonly demandParamsService: DemandParamsService) {}

  @Post()
  create(@Body() createDemandParamDto: CreateDemandParamDto) {
    return this.demandParamsService.create(createDemandParamDto);
  }

  @Get()
  findAll() {
    return this.demandParamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.demandParamsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDemandParamDto: UpdateDemandParamDto,
  ) {
    return this.demandParamsService.update(+id, updateDemandParamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.demandParamsService.remove(+id);
  }
}
