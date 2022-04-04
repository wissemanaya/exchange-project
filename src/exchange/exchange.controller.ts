import { Body, Controller, Post } from '@nestjs/common';
import { CreateCoine } from './dto/createCoin.dto';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Post('/coin')
  async createCoin(@Body( ) createcondto : CreateCoine): Promise<void> {
    return this.exchangeService.createCoin(createcondto) ;
  }
}
