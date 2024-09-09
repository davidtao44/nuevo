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

<<<<<<< HEAD

function Firugay(): string {
  return 'firu es gay!';
}
=======
function sumar(a, b) {
  return a + b;
}
>>>>>>> 1f131ccb8e8a42ba351f39b85e5290c659e81069
