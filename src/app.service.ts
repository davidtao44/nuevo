import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Esta es otra prueba';
    return 'Hello Gno';
  }
}
