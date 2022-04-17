import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  shortDescription: string;

  @Column()
  description: string;

  @Column()
  actors: string;

  @Column()
  time: number;

  @Column()
  director: string;
}
