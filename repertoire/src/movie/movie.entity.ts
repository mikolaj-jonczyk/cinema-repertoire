import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RepertoireData } from '../repertoire-data/repertoire-data.entity';

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

  @OneToMany(() => RepertoireData, (repertoireData) => repertoireData.cinema)
  repertoire: RepertoireData[];
}
