import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresModule } from 'src/providers/postgres/postgres.module';
import { AppController } from './app.controller';
import { App } from './app.entity';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        process.env.NODE_ENV === 'dev' ? 'development.env' : '.env',
      ],
    }),
    PostgresModule,
    TypeOrmModule.forFeature([App]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
