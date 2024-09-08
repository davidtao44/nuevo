import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.Firugay();
    return this.appService.getHello();
  }
}


function Firugay(): string {
  return 'firu es gay!';
}
