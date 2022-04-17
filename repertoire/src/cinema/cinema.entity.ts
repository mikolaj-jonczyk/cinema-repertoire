import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { RepertoireData } from '../repertoire-data/repertoire-data.entity';

@Entity()
export class Cinema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @OneToMany(() => RepertoireData, (repertoireData) => repertoireData.cinema)
  repertoire: RepertoireData[];
}
