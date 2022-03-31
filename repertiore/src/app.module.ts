import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CinemaModule } from './cinema/cinema.module';

@Module({
  imports: [CinemaModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
