import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  onModuleInit() {
    this.test();
  }

  test() {
    return this.appService.save();
  }
}
