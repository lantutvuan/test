import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { App } from './app.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) {}
  async save() {
    for (let i = 0; i < 1000; i++) {
      console.log(
        this.appRepository.save({
          name: 'app',
          type: 'type',
          number: 123,
        }),
      );
    }
  }

  async get() {
    for (let i = 0; i < 1000; i++) {
      console.log(await this.appRepository.findOne({ where: { name: 'app' } }));
    }
  }
}
