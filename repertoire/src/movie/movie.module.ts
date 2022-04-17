import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MovieController } from './movie.controller';
import { MovieRepository } from './movie.repository';
import { MovieService } from './movie.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieRepository])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
