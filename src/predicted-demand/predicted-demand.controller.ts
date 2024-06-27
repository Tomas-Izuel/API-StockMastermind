import { 
    Body,
    Controller, 
    Get, 
    Post,
} from '@nestjs/common';
import { PredictedDemandService } from './predicted-demand.service';
import { CreatePredictedDemandDto } from './dto/create-predicted-demand.dto';

@Controller('predicted-demand')
export class PredictedDemandController {

    constructor(private readonly predictedDemandService: PredictedDemandService ){}

    @Post()
    create(@Body() createPredictedDemandDto: CreatePredictedDemandDto){
        return this.predictedDemandService.create(createPredictedDemandDto);
    }

    @Get()
    findAll(){
        return this.predictedDemandService.findAll();
    }
    
}
