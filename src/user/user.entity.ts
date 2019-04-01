import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  lastName: string;

  @Column()
  company: string;

  @Column()
  password: string;

  @Column('text')
  type: string;
}
