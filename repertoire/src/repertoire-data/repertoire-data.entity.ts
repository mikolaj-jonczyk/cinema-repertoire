import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Cinema } from '../cinema/cinema.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
export class RepertoireData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Cinema, (cinema) => cinema.repertoire)
  cinema: Cinema;

  @ManyToOne(() => Movie, (movie) => movie.repertoire)
  movie: Movie;

  @Column()
  date: Date;
}
