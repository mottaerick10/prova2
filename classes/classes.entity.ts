import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classes')
export class ClassEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  shift: string;

  @Column()
  capacity: number;

  @Column({ type: 'date' })
  start_date: string;
}
