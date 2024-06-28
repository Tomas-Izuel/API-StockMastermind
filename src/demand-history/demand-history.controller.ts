import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandHistoryService } from './demand-history.service';
import { CreateDemandHistoryDto } from './dto/create-demand-history.dto';
import { UpdateDemandHistoryDto } from './dto/update-demand-history.dto';

@Controller('demand-history')
export class DemandHistoryController {
  constructor(private readonly demandHistoryService: DemandHistoryService) {}

  @Post()
  create(@Body() createDemandHistoryDto: CreateDemandHistoryDto) {
    return this.demandHistoryService.create(createDemandHistoryDto);
  }

  @Get()
  findAll() {
    return this.demandHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandHistoryDto: UpdateDemandHistoryDto) {
    return this.demandHistoryService.update(+id, updateDemandHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandHistoryService.remove(+id);
  }
}
