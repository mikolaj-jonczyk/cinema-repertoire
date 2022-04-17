import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RepertoireDataService } from './repertoire-data.service';
import { RepertoireDataController } from './repertoire-data.controller';
import { MovieRepository } from '../movie/movie.repository';
import { CinemaRepository } from '../cinema/cinema.repository';
import { RepertoireDataRepository } from './repertoire-data.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovieRepository]),
    TypeOrmModule.forFeature([CinemaRepository]),
    TypeOrmModule.forFeature([RepertoireDataRepository]),
  ],
  providers: [RepertoireDataService],
  controllers: [RepertoireDataController],
})
export class RepertoireDataModule {}
