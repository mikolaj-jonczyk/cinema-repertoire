import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfig } from './app.config';
import { CinemaModule } from './cinema/cinema.module';
import { MovieModule } from './movie/movie.module';
import { RepertoireDataModule } from './repertoire-data/repertoire-data.module';

@Module({
  imports: [
    CinemaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: AppConfig.Database.HOST,
      port: parseInt(AppConfig.Database.PORT),
      username: AppConfig.Database.USER,
      password: AppConfig.Database.PASSWORD,
      database: AppConfig.Database.NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RepertoireDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
