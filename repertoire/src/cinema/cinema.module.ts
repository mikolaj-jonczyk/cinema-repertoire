import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CinemaController } from './cinema.controller';
import { CinemaRepository } from './cinema.repository';
import { CinemaService } from './cinema.service';

@Module({
  imports: [TypeOrmModule.forFeature([CinemaRepository])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
